"use client"
import { Box, Container, Typography, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { ActiveMintHeader, CarouselContentContainer, CarouselWrapper, CollectionInnerContainer, CollectionItem, CollectionItemBox, CollectionItemNumber, CollectionTitle, Collections, DaysButton, ExpandAllButton, IconWrapper, IconsWrapper, ImagesContainer, MainBoxContainer, MintGrid, NextImage, RecommendedCollection, ServicesTitle, SlidersIcons, TextContainer, Thumbnail, Tile } from './styles'
import { AngleLeft, AngleRight } from '@/components/Svgs'
import Carousel from 'react-multi-carousel'
import ActiveMintCard from '@/components/LandingPage/Home/ActiveMintCard/ActiveMintCard'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { slider_settings, responsive_mint, services_settings } from '@/constants/homeSliderSettings'
import { ServiceCard } from '@/components/ServiceCard'
import { FeaturedCardSkeleton, MintCardSkeleton } from '@/components/Skeletons'
import { useGetFeaturedCollectionsQuery } from '@/lib/slices/collections/apis'
import { useRouter } from 'next/navigation'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoonCard from '@/components/MoonCard/MoonCard'

export const Days = ({ days, onChange }) => {
	const [activeButton, setActiveButton] = useState(days[0]);
	useEffect(()=>{
		onChange && onChange(activeButton)
	},[activeButton])
	return (
		<Box>
			{days.map((item, index) =>
				<DaysButton key={`day-${index + 1}`} variant="outlined" active={(item === activeButton).toString()} onClick={() => setActiveButton(item)}>
					{item}
				</DaysButton>
			)}
		</Box>
	)
}


export const RecommendedCollections = ({ responsive }) => {

	const { data, isLoading } = useGetFeaturedCollectionsQuery(5)
	const { palette } = useTheme();
	const recommendation = useRef();
	const onNavigateRecommendation = (key) => {
		if (recommendation.current) {
			if (key === "next") {
				recommendation.current.next();
			} else {
				recommendation.current.previous();
			}
		}
	};

	return <CarouselWrapper>
		<Container>
			<RecommendedCollection variant="subtitle1">
				Recommended Collections
			</RecommendedCollection>
			<Collections>
				<IconWrapper
					className="prev"
					onClick={() => onNavigateRecommendation("previous")}
				>
					<AngleLeft color={palette.grey[800]} />
				</IconWrapper>
				<IconWrapper
					className="next"
					onClick={() => onNavigateRecommendation("next")}
				>
					<AngleRight color={palette.grey[800]} />
				</IconWrapper>
				<Carousel
					responsive={responsive}
					infinite={true}
					ref={recommendation}
					arrows={false}
				>
					{isLoading ? [1, 2, 3, 4].map((item, index) => {
						return (
							<CarouselContentContainer key={`rec-collection-skeleton-${index + 1}`}>
								<FeaturedCardSkeleton />
							</CarouselContentContainer>
						);
					}) : data?.featured_collections?.map((collection, index) => {
						return (
							<>
								{collection ? <CarouselContentContainer key={`rec-collection-${index + 1}`}>
									<FeatureCard collection={collection} />
								</CarouselContentContainer> : ""}
							</>
						);
					})}
				</Carousel>
			</Collections>
		</Container>
	</CarouselWrapper>
}


export const ActiveMints = ({ mints, isLoading }) => {
	const router = useRouter()
	const active = useRef();
	const mintsToShow = mints.length > 4 ? 4 : mints.length;
	
	const onNavigateActive = (key) => {
		if (active.current) {
			if (key === "next") {
				active.current.slickNext();
			} else {
				active.current.slickPrev();
			}
		}
	};

	const handleRedirect = () => {
		router.push("/launchpad")
	}

	return <Container>
		<ActiveMintHeader>
			<Typography variant="subtitle1">Active Mints</Typography>
			<SlidersIcons>
				<ExpandAllButton variant="contained" onClick={handleRedirect}>
					Explore All
				</ExpandAllButton>
				<IconsWrapper>
					<IconWrapper onClick={() => onNavigateActive("previous")}>
						<ArrowBackIcon />
					</IconWrapper>
					<IconWrapper onClick={() => onNavigateActive("next")}>
						<ArrowForwardIcon />
					</IconWrapper>
				</IconsWrapper>
			</SlidersIcons>
		</ActiveMintHeader>
		<MintGrid className="mb-5">
			<Slider
				{...slider_settings({xs:1, sm: 1, md: mintsToShow, lg: mintsToShow  })}
				ref={active}
			>
				{mints.map((mint) => {
					const card = mint || {}
					return (
						<CarouselContentContainer key={`active-mint-${mint.id + 1}`}>
							{
								isLoading ? <MintCardSkeleton type='progress'  /> :
									<ActiveMintCard
										href={`/mint/${card?.collections?.vanity_url}`}
										image={card?.collections?.pfp_url}
										name={card.name}
										live={true}
										price={card?.collections?.minting_price}
										currecny={card?.collections?.minting_currency}
										minting_id={card.minted_nfts}
										nfts={card.total_nfts}
									/>
							}
						</CarouselContentContainer>
					);
				})}
			</Slider>
			
		</MintGrid>
	</Container>
}




export const ServiceSlider = ({ servicesData, responsive }) => {
	const services = useRef();
	const servicesToShow = servicesData.length > 4 ? 3 : servicesData.length
	const onNavigateServices = (key) => {
		if (services.current) {
			if (key === "next") {
				services.current.slickNext();
			} else {
				services.current.slickPrev();
			}
		}
	};
	return (
		<CarouselWrapper className="m_0">
			<Container>
				<ServicesTitle variant="subtitle1">Our Services</ServicesTitle>
				<Collections>
					<IconWrapper
						className="prev"
						onClick={() => onNavigateServices("previous")}
					>
						<ArrowBackIcon />
					</IconWrapper>
					<IconWrapper
						className="next"
						onClick={() => onNavigateServices("next")}
					>
						<ArrowForwardIcon />
					</IconWrapper>
					<Slider
						{...slider_settings({xs:1, sm: 1, md: servicesToShow, lg: servicesToShow  })}
						ref={services}
					>
						{servicesData.map((service, index) => (
							<CarouselContentContainer key={`service-carousel-${index + 1}`}>
								<ServiceCard service={service} />
							</CarouselContentContainer>
						))}
					</Slider>
				</Collections>
			</Container>
		</CarouselWrapper>
	)
}



export const FeatureCard = async ({ collection }) => {
	const router = useRouter()
	const c = collection?.collection || {}

	return <MainBoxContainer onClick={() => router.push(`/collections/${c.vanity_url}`)} >
		<CollectionInnerContainer>
			<ImagesContainer>
				<Thumbnail >
					<NextImage
						src={c?.pfp_url}
						alt="Big Image"
						layout="fill"
						objectFit="cover"
						draggable={false}
					/>
				</Thumbnail>
				{(collection?.nfts || [1, 2]).map((i, index) => {
					const img = i.image_url
					return <Tile key={`collection-tile-${index+1}`} >
						<NextImage
							src={img || '/images/nft-img-1.png'}
							alt="Small Image 1"
							layout="fill"
							objectFit="cover"
							draggable={false}
							loader={({ src, width, quality }) => {
								return `${src}?w=${width}&q=${quality || 75}`
							}}
						/>
					</Tile>
				})}
				{/* <Tile >
					<NextImage
						src={'/images/nft-img-1.png'}
						alt="Small Image 1"
						layout="fill"
						objectFit="cover"
						draggable={false}
					/>
				</Tile> */}

				{/* {
					collection?.nfts?.map((nft) => {
						const isValid = (nft?.image_url || "").replace("ipfs://", "https://ipfs.io/ipfs/");
						return (<Tile key={nft.id} >
							<NextImage
								src={isValid}
								alt="Small Image 1"
								layout="fill"
								objectFit="cover"
								draggable={false}
							/>
						</Tile>)
					})
				} */}
			</ImagesContainer>
		</CollectionInnerContainer>
		<TextContainer>
			<CollectionTitle>{c.name}</CollectionTitle>
			<CollectionItemBox>
				<CollectionItemNumber>
					{c.nfts}
				</CollectionItemNumber>
				<CollectionItem>items</CollectionItem>
			</CollectionItemBox>
		</TextContainer>
	</MainBoxContainer>
}

export const TabsSlider = ({ list, responsive }) => {

	const { palette } = useTheme();
	const ref = useRef();
	const listsToShow = list.length > 4 ? 4 : list.length;
	const onNavigateRecommendation = (key) => {
		if (ref.current) {
			if (key === "next") {
				ref.current.next();
			} else {
				ref.current.previous();
			}
		}
	};

	return <CarouselWrapper bg="none" >
		<Container>
			<Slider
				{...slider_settings({xs:1, sm: 1, md: listsToShow -1, lg: listsToShow  })}
				ref={ref}
			>
				{list?.map((card, index) => {
					return (
						<CarouselContentContainer key={`rec-moon-${index + 1}`}>
							<MoonCard
								href={`/collections/${card.vanity_url}`}
								image={card.pfp_url}
								title={card.name}
								creator={card.issuer}
								floorPrice={`${card.floor_price} ${card.minting_currency} `}
								floorList={card.nfts}
							/>
						</CarouselContentContainer>
					);
				}) || null}
			</Slider>
		</Container>
	</CarouselWrapper>
}