"use client";
import { changeThemeMode } from "@/lib/slices/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useServerInsertedHTML } from "next/navigation";
import { useEffect, useState } from "react";
import { theme } from "./constants";

export const Theme = (props) => {
  const [activeTheme, setActiveTheme] = useState("light");
  const themeMode = useAppSelector((state) => state.theme.themeMode);

  const dispatch = useAppDispatch();

  const { children } = props;
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: "mui-theme" });
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });
  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  useEffect(() => {
    if (themeMode) {
      dispatch(changeThemeMode({ themeMode: themeMode }));
      setActiveTheme(themeMode);
    } else {
      dispatch(changeThemeMode({ themeMode: "light" }));
      setActiveTheme("light");
    }
  }, [themeMode, dispatch]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme(activeTheme)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};
