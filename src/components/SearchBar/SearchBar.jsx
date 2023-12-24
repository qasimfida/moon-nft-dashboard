"use client";
import { serahcItems } from "@/constants";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useOnClickOutside } from "usehooks-ts";
import {
  CollectionBox,
  CollectionCountBox,
  CollectionCountTypography,
  CollectionMainBox,
  CollectionNameTypography,
  Input,
  LengthTextBox,
  MobileResultsMainBox,
  MobileSearchWrapper,
  ResultsMainBox,
  SearchIcon,
  SearchMainBox,
  SearchTypeTypography,
  SearchWrapper,
  SeeAllMainBox,
  SeeAllTypography,
  TotalLengthBox,
} from "./styles";
import { useAppSelector } from "@/lib/store";
import CloseIcon from '@mui/icons-material/Close';
import ClickAwayListener from "@/helpers/ClickAwayListener";

export const SearchBar = ({ placeholder, width, simpleSearch, onChange, ...rest }) => {
  const themeMode = useAppSelector((state) => state.theme.themeMode);
  const ref = useRef();

  const [value, setValue] = useState(rest.value);
  const [open, setOpen] = useState(false);

  const filteredItems = serahcItems.filter((item) => { });

  useOnClickOutside(ref, () => (false));

  useEffect(() => {
    onChange && onChange(value)
      
    if(!simpleSearch){
      if (value) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }
  }, [value]);

  return (
    <SearchWrapper ref={ref}>
      {simpleSearch ? (<> <SearchMainBox width={width}>
        <SearchIcon />
        <Input
          placeholder={placeholder}
          className="searchInput"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          {...rest}
        />

      </SearchMainBox></>) : (<>
        <SearchMainBox width={width}>
          <SearchIcon />
          <Input
            placeholder={placeholder}
            className="searchInput"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          {value && open && (
            <TotalLengthBox onClick={() => setValue("")}>
              Clear
              <LengthTextBox><CloseIcon /></LengthTextBox>
            </TotalLengthBox>
          )}
        </SearchMainBox>
        {value && open && (
          <ResultsMainBox>
            {serahcItems.map((item, index) => {
              return (
                <Fragment key={`search-collection-${index + 1}`}>
                  {item.type == "collections" && (
                    <Box >
                      {" "}
                      <SearchTypeTypography>Collections</SearchTypeTypography>
                      {item.collections
                        .map((collection, ind) => {
                          return (
                            <CollectionMainBox
                              sx={{
                                borderBottom:
                                  ind !== item.collections.length - 1 &&
                                  "1px solid rgba(207, 219, 213, 0.15)",
                              }}
                              key={ind}
                            >
                              <CollectionBox>
                                <Image
                                  src={"/images/collectionImg.svg"}
                                  width={30}
                                  height={30}
                                  draggable={false}
                                  alt="collection"
                                />
                                <CollectionNameTypography>
                                  {collection.name}
                                </CollectionNameTypography>
                              </CollectionBox>
                              <CollectionCountBox>
                                <Image
                                  src={"/images/doubleArrow.svg"}
                                  width={18}
                                  height={18}
                                  draggable={false}
                                  style={{ color: "white" }}
                                  alt="x-icon"
                                />
                                <CollectionCountTypography>
                                  {collection.items} items
                                </CollectionCountTypography>
                              </CollectionCountBox>
                            </CollectionMainBox>
                          );
                        })}
                    </Box>
                  )}
                  {item.type == "profiles" && (
                    <Box>

                      <SearchTypeTypography>Profiles</SearchTypeTypography>
                      {item.profiles
                        .map((profile, ind) => {
                          return (
                            <CollectionMainBox
                              key={`search-profile-${ind + 1}`}
                              sx={{
                                borderBottom:
                                  ind !== item.profiles.length - 1 &&
                                  "1px solid rgba(207, 219, 213, 0.15)",
                              }}
                            >
                              <CollectionBox>
                                <Image
                                  src={"/images/collectionImg.svg"}
                                  width={30}
                                  height={30}
                                  alt="collection"
                                />
                                <CollectionNameTypography>
                                  {profile.name}
                                </CollectionNameTypography>
                              </CollectionBox>
                            </CollectionMainBox>
                          );
                        })}
                    </Box>
                  )}
                </Fragment>
              );
            })}
            <Box>
              <SeeAllMainBox>
                <SeeAllTypography>See all results</SeeAllTypography>
              </SeeAllMainBox>
            </Box>
          </ResultsMainBox>
        )}
      </>)}
    </SearchWrapper>
  );
};
export const MobileSearchBar = ({ placeholder, width, simpleSearch }) => {
  const themeMode = useAppSelector((state) => state.theme.themeMode);
  const ref = useRef();

  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const filteredItems = serahcItems.filter((item) => { });

  useOnClickOutside(ref, () => (false));

  return (
    <MobileSearchWrapper ref={ref}>
      { (<>
        <SearchMainBox width={width}  onClick={()=>setOpen(!open)}>
          <SearchIcon />
          
        </SearchMainBox>
        {open && (
          <ClickAwayListener onClickAway={()=>setOpen(false)} >
            <MobileResultsMainBox className="click-away-element" >
            {value && open && (
              <TotalLengthBox className="mobile-clear" onClick={() => setValue("")}>
                Clear
                <LengthTextBox><CloseIcon /></LengthTextBox>
              </TotalLengthBox>
            )}
              <Input
                placeholder={placeholder}
                className="searchInput"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              {serahcItems.map((item, index) => {
                return (
                  <Fragment key={`search-collection-${index + 1}`}>
                    {item.type == "collections" && (
                      <Box >
                        {" "}
                        <SearchTypeTypography>Collections</SearchTypeTypography>
                        {item.collections
                          .map((collection, ind) => {
                            return (
                              <CollectionMainBox
                                sx={{
                                  borderBottom:
                                    ind !== item.collections.length - 1 &&
                                    "1px solid rgba(207, 219, 213, 0.15)",
                                }}
                                key={ind}
                              >
                                <CollectionBox>
                                  <Image
                                    src={"/images/collectionImg.svg"}
                                    width={30}
                                    height={30}
                                    draggable={false}
                                    alt="collection"
                                  />
                                  <CollectionNameTypography>
                                    {collection.name}
                                  </CollectionNameTypography>
                                </CollectionBox>
                                <CollectionCountBox>
                                  <Image
                                    src={"/images/doubleArrow.svg"}
                                    width={18}
                                    height={18}
                                    draggable={false}
                                    style={{ color: "white" }}
                                    alt="x-icon"
                                  />
                                  <CollectionCountTypography>
                                    {collection.items} items
                                  </CollectionCountTypography>
                                </CollectionCountBox>
                              </CollectionMainBox>
                            );
                          })}
                      </Box>
                    )}
                    {item.type == "profiles" && (
                      <Box>

                        <SearchTypeTypography>Profiles</SearchTypeTypography>
                        {item.profiles
                          .map((profile, ind) => {
                            return (
                              <CollectionMainBox
                                key={`search-profile-${ind + 1}`}
                                sx={{
                                  borderBottom:
                                    ind !== item.profiles.length - 1 &&
                                    "1px solid rgba(207, 219, 213, 0.15)",
                                }}
                              >
                                <CollectionBox>
                                  <Image
                                    src={"/images/collectionImg.svg"}
                                    width={30}
                                    height={30}
                                    alt="collection"
                                  />
                                  <CollectionNameTypography>
                                    {profile.name}
                                  </CollectionNameTypography>
                                </CollectionBox>
                              </CollectionMainBox>
                            );
                          })}
                      </Box>
                    )}
                  </Fragment>
                );
              })}
              <Box>
                <SeeAllMainBox>
                  <SeeAllTypography>See all results</SeeAllTypography>
                </SeeAllMainBox>
              </Box>
            </MobileResultsMainBox>
          </ClickAwayListener>
        )}
      </>)}
    </MobileSearchWrapper>
  );
};
