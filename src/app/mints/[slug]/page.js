"use client";
import Header from "@/components/Header";
import React, { Suspense, memo } from "react";
import { Wrapper } from "../../style";
import Form from "@/components/Form";

const Home = () => {
	return (
		<Suspense fallback={() => <div></div>}>
			<Wrapper>
				<Header title="Add new Collection"  />
                <Form/>
			</Wrapper>
		</Suspense>
	);
};

export default memo(Home);
