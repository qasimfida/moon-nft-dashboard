"use client"

import { CommonBanner } from "@/components/CommonBanner"
import { StyledGrid, Wrapper } from "./styles"
import { Heading } from "@/components/Heading"
import { Container, Grid } from "@mui/material"
import { ServiceCard } from "@/components/ServiceCard"

export const ServicesContainer = ({ servicesData }) => {
    return (
        <Wrapper>
            <CommonBanner title="Excellence in Service" subtitle="Unmatched Quality" />
            <Container className="wrapper" >
                <Heading title="Solutions for All" border className="service-heading" />
                <Grid container justifyContent={"space-between"} spacing={3}>
                    {servicesData.map((service, index) => (
                        <StyledGrid item key={index} xs={12} sm={12} md={4}>
                            <ServiceCard service={service} className={'shadow-light'} />
                        </StyledGrid>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}
