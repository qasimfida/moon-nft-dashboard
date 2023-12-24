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
					title="Collections"
					buttonLabel={"Add a collection"}
					handleSearch={console.log}
					onClick={() => router.push("/collections/1")}

				/>
				<Collections onClick={() => router.push("/mints/1")} isEditable />
			</Wrapper>
		</Suspense>
	);
};

export default Home;
