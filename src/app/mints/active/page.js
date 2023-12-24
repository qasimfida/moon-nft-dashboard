"use client";
import Header from "@/components/Header";
import React, { Suspense, memo } from "react";
import { Wrapper } from "./style";
import Collections from "@/components/Collections";
import { useRouter } from "next/navigation";

const Home = () => {
	const router = useRouter();
	return (
		<Suspense fallback={() => <div></div>}>
			<Wrapper>
				<Header
					title="Active Mints"
					buttonLabel={"Add a collection"}
					onClick={() => router.push("/collections/1")}
				/>
				<Collections />
			</Wrapper>
		</Suspense>
	);
};

export default Home;
