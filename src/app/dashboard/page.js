"use client";
import Header from "@/components/Header";
import React, { Suspense, memo } from "react";
import { Wrapper } from "../style";

const Home = () => {
	return (
		<Suspense fallback={() => <div></div>}>
			<Wrapper>
				<Header title="Dashboard"  />
			</Wrapper>
		</Suspense>
	);
};

export default memo(Home);
