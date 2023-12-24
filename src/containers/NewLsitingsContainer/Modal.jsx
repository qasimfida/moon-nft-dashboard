"use client"
import React, { useState } from "react";
import {
    BodyContent,
    BoxTypo,
    Content,
    Desc,
    DiscardButton,
    DropdownWrapper,
    Finalize,
    Footer,
    Header,
    ItemBox,
    ItemImage,
    Label,
    MintPriceWrapper,
    ModalWrapper,
    NFTPreview,
    NFTPreviewBox,
    NFTPreviewBox1,
    NFTPreviewBox2,
    PlannedInput,
    PlannedMint,
    ProjectDetailsBox,
    RevealButton,
    RevealWrapper,
    SelectItemBox,
    StyledModal,
    SubTitleTypo,
    TextareaWrapper,
    Title,
    Ziptext,
} from "./styles";
import { Dropdownlists, selectItemBox } from "@/constants/newListsData";
import Image from "next/image";
import { Box, Button, InputAdornment } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Input from "@/components/Input";
import ListingsDropdown from "@/components/ListingsDropdown";
import TextAreaWithLabel from "@/components/TextAreaWithLabel";
import ImageUpload from "@/components/ImageUpload";
import { MinPriceIcon } from "@/components/Svgs";

export const Modal = ({
  title,
  caption,
  open,
  handleClose,
  handleChange,
  values,
}) => {

    const [step, setStep] = useState(1);
    const handleStep =(value) => (e) => {
        if(value === 9){
            alert("published")
        }else {

            setStep(value+1)
        }
    }
    const {type} = values;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        centerPadding: "28px",
    };

    const renderStep = () => {
        switch(step){
            case 1: return (<Slider 
                            {...settings}
                        >
                            {selectItemBox.map((item, index) => (
                                <ItemBox key={`select-item ${index + 1}`} className={`item ${type === item.id ? "active" : ""}`}>
                                    <ItemImage >
                                        <Image src={item.Image} alt="Art-Image" />
                                    </ItemImage>
                                    <BoxTypo variant="body2">{item.title}</BoxTypo>
                                    <Button size="large" variant="contained" onClick={()=>handleChange('type', item.id)} >{type === item.id ? "Selected":"Select"}</Button>
                                </ItemBox>
                            ))}
                        </Slider>);
            case 2: return <ProjectDetailsBox>
                                <Label variant="caption">Name your collection</Label>
                                <Input className="input-p-5" placeholder={"Collection Name"} />
                                <Label variant="caption">Select a category</Label>
                                <DropdownWrapper>
                                    <ListingsDropdown options={Dropdownlists} />
                                </DropdownWrapper>
                                <Label variant="caption">Describe your collection </Label>
                                <TextAreaWithLabel className="p-5" variant="border" />
                            </ProjectDetailsBox>;
            case 3: return <NFTPreviewBox>
                                <NFTPreviewBox1 className="nft__Box" >
                                <Label variant="caption" className="mb__5">Profile Picture (Dimensions - 512 x 512)</Label>
                                    <ImageUpload id="profile-1" />
                                </NFTPreviewBox1>
                                <NFTPreviewBox2 >
                                <Label variant="caption" className="mb__5">Profile Banner (Dimensions 1800 x 400)</Label>
                                    <ImageUpload id="profile-2" />
                                </NFTPreviewBox2>
                            </NFTPreviewBox>
            case 4: return <NFTPreviewBox>
                                <Label variant="caption" className="mb__5">Profile Picture (Dimensions - 512 x 512)</Label>
                                <NFTPreviewBox1>
                                    <ImageUpload id="profile-3" />
                                </NFTPreviewBox1>
                                <NFTPreviewBox2 >
                                    <ImageUpload id="profile-4" />
                                </NFTPreviewBox2>
                                <NFTPreviewBox1>
                                    <ImageUpload id="profile-5" />
                                </NFTPreviewBox1>
                                <NFTPreviewBox2 >
                                    <ImageUpload id="profile-6" />
                                </NFTPreviewBox2>
                            </NFTPreviewBox>
            case 5: return <ProjectDetailsBox>
                                <Label variant="caption">Whitepaper</Label>
                                <Input className="input-p-5" placeholder={"e.g. www.whitepaper.com"} />
                                <Label variant="caption">Website</Label>
                                <Input className="input-p-5" placeholder={"e.g. www.website.com"} />
                                <Label variant="caption">Discord Server</Label>
                                <Input className="input-p-5" placeholder={"e.g. https://discord.com/invite/E2ZN28Z7qN"} />
                                <Label variant="caption">Twitter Server</Label>
                                <Input className="input-p-5" placeholder={"e.g. https://discord.com/invite/E2ZN28Z7qN"} />
                            </ProjectDetailsBox>
            case 6: return <ProjectDetailsBox>
                            <Label variant="caption">Bulletpoint 01</Label>
                                <Input className="input-p-5" placeholder={"Header (max. 50 characters)"} />
                                <TextareaWrapper>
                                    <TextAreaWithLabel className="p-5" variant="border" />
                                </TextareaWrapper>
                                    <Label variant="caption">Bulletpoint 02</Label>
                                    <Input className="input-p-5" placeholder={"Header (max. 50 characters)"} />
                                <TextareaWrapper>
                                    <TextAreaWithLabel className="p-5" variant="border" />
                                </TextareaWrapper>
                                    <Label variant="caption">Bulletpoint 03</Label>
                                    <Input className="input-p-5" placeholder={"Header (max. 50 characters)"} />
                                    <TextareaWrapper>
                                        <TextAreaWithLabel className="p-5" variant="border" />
                                    </TextareaWrapper>
                                    <Label variant="caption">Bulletpoint 04</Label>
                                    <Input className="input-p-5" placeholder={"Header (max. 50 characters)"} />
                                <TextareaWrapper>
                                    <TextAreaWithLabel className="p-5" variant="border" />
                                </TextareaWrapper>
                                    <Label variant="caption">Bulletpoint 05</Label>
                                    <Input className="input-p-5" placeholder={"Header (max. 50 characters)"} />
                                <TextareaWrapper>
                                    <TextAreaWithLabel className="p-5" variant="border" />
                                </TextareaWrapper>
                        </ProjectDetailsBox>
            case 7: return <ProjectDetailsBox>
                                <Label variant="caption"> Upload a Zip-Folder</Label>
                                <ImageUpload id="zip-folder" />
                        </ProjectDetailsBox>
            case 8: return <ProjectDetailsBox>
                                <PlannedMint>
                                    <PlannedInput>
                                        <Label variant="caption">Planned Mint Date</Label>
                                        <Input className="input-p-5" placeholder={"Mint Date"} />
                                    </PlannedInput>
                                    <PlannedInput>
                                        <Label variant="caption">Planned Mint Time</Label>
                                        <Input className="input-p-5" placeholder={"Mint Time"} />
                                    </PlannedInput>
                                </PlannedMint>
                                <PlannedMint>
                                    <PlannedInput>
                                        <Label variant="caption">Mint Price</Label>
                                    <MintPriceWrapper>
                                    <Input className="input-p-5" placeholder={"Price"}   InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <MinPriceIcon />
                                            </InputAdornment>
                                            ),
                                        }}/>
                                    </MintPriceWrapper>
                                    </PlannedInput>
                                    <PlannedInput className="royalty">
                                        <Label variant="caption">Royalty</Label>
                                        <Input className="input-p-5" placeholder={"e.g. 5%"} />
                                    </PlannedInput>
                                </PlannedMint>
                                <PlannedMint className="mint__type__Wrapper">
                                    <PlannedInput className="mint__type">
                                        <Label variant="caption">Mint Type</Label>
                                        <RevealWrapper>
                                            <Button variant="contained" className="random__btn">Random</Button>
                                            <RevealButton variant="contained">Late Reveal</RevealButton>
                                        </RevealWrapper>
                                    </PlannedInput>
                                    <PlannedInput className="mint__type">
                                        <Label variant="caption">Placeholder (only for “Late Reveal”)</Label>
                                        <ImageUpload id="Late Reveal" />
                                    </PlannedInput>
                                </PlannedMint>
                        </ProjectDetailsBox>
            case 9: return <ProjectDetailsBox>
                                <Label variant="caption">E-Mail Address</Label>
                                <Input className="input-p-5" placeholder={"e.g. project@gmail.com"} />
                        </ProjectDetailsBox>
            default: return ""
        }
    }

    const renderTitle = () => {
        switch(step){
            case 1:  return "Select Item Type"
            case 2: return "Project Details"
            case 3: return "Project Media (1/2)"
            case 4: return "Project Media (2/2)"
            case 5: return "Project URLs"
            case 6: return "Road Map"
            case 7: return "Upload Assets"
            case 8: return "Mint Details"
            case 9: return "Contact Information"
            default : return ""
        }
        
    }

    return (
        <StyledModal
            anchor="bottom"
            open={open}
            onClose={handleClose}
            aria-labelledby="launchpad"
            aria-describedby="launchpad description"
        >
            <ModalWrapper>
                <Header variant="outlined" onClick={handleClose} >
                    Cancel
                </Header>
                <Content>
                    <Title>
                        <SubTitleTypo variant="h5" >{renderTitle()}</SubTitleTypo>
                        {step === 1 &&<Desc variant="body2">They all serve the same purpose, but each one takes a different.</Desc>}
                    </Title>
                    
                    {renderStep()}
                </Content>
                {
                    step === 9 ? <Finalize>
                        <Footer variant="contained" size="large" onClick={handleStep(step)} > Publish</Footer>
                        <DiscardButton variant="contained" onClick={handleClose} >Discard all</DiscardButton>
                    </Finalize> : <Footer variant="contained" size="large" onClick={handleStep(step)} > Next</Footer>
                }
                
            </ModalWrapper>
        </StyledModal>
    );
};
