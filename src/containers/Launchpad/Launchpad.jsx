"use client"

import { MainBox, MainSetion } from "./styles"
import Launchpad from "@/components/LandingPage/Launchpad";

export const LaunchpadContainer = () => {
    return (
        <MainSetion>
            <MainBox>
                <Launchpad />
            </MainBox>
        </MainSetion>
    )
}
