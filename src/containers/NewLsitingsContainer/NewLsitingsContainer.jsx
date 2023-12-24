"use client"
import { Button, Grid, Box, Container, useTheme } from "@mui/material"
import { SelectItemBox, ItemBox, SubTitleTypo, TitleTypo, Wrapper, ItemImage, BoxTypo, ProjectDetailsBox, Label, DropdownWrapper, BodyContent, NFTPreview, NFTPreviewBox, NFTPreviewBox1, NFTPreviewBox2, ProjectMedia, TextareaWrapper, Ziptext, MintsDetails, PlannedMint, PlannedInput, RevealButton, RevealWrapper, DiscardButton, FinalizeWrapper, MintPriceWrapper, BlockchainWrapper, BlockchainBox, BlockChainItem, BlockChainTitle, BlockChainIcon, BlockChainGrid, BlockChainMainBox, Relative, StyledModal, Time, Date } from "./styles"
import { useState } from "react";
import Image from "next/image";
import Input from "@/components/Input";
import ListingsDropdown from "@/components/ListingsDropdown";
import { Dropdownlists, selectItemBox } from "@/constants/newListsData";
import TextAreaWithLabel from "@/components/TextAreaWithLabel";
import ImageUpload from "@/components/ImageUpload";
import { MinPriceIcon, IncompleteIcon, CheckRoundedIcon } from "@/components/Svgs";
import InputAdornment from '@mui/material/InputAdornment';
import useMobileWidth from "@/hooks/useWindowWidth";
import { Modal } from "./Modal";
import { useRouter } from "next/navigation";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from "dayjs";
const data = [
    { id: "1", key: "blockchain", heading: 'Choose Blockchain' },
    { id: "2", key: "type", heading: 'Road Map' },
    { id: "3", key: "", heading: 'Select Item Type' },
    { id: "4", key: "", heading: 'Upload Assets' },
    { id: "5", key: "", heading: 'Project Details' },
    { id: "6", key: "", heading: 'Mint Details' },
    { id: "7", key: "", heading: 'Project Media' },
    { id: "8", key: "", heading: 'Contact Information' },
    { id: "9", key: "", heading: 'Project URLs' },
];
export const NewLsitingsContainer = () => {
    const { breakpoints } = useTheme()
    const router = useRouter()
    const isMobile = breakpoints.values.md >= useMobileWidth()
    const [values, setValues] = useState({
        type: "1",
        name: "",
        category: "",
        description: "",
        mintType: "random",
        minTime: dayjs().add(30, 'minute'),
        mintDate: dayjs().add(1, 'day')
    })
    const handleChange = (key, value) => {
        setValues((prev) => {
            return { ...prev, [key]: value }
        });
    };
    const { type } = values;

    if (isMobile) {
        return <Modal open={true} handleClose={() => router.push('/')} values={values} handleChange={handleChange} />
    }
    return (
        <Wrapper>
            <Container>
                <Grid container  >
                    <Grid item xs={12} md={7}>
                        <TitleTypo variant="h1">Apply for Launchpad</TitleTypo>
                        <SubTitleTypo variant="h5" className="mt__34">Select Item Type</SubTitleTypo>
                        <SelectItemBox>
                            {selectItemBox.map((item, index) => (
                                <ItemBox key={`select-item ${index + 1}`}
                                    onClick={() => handleChange('type', item.id)} className={`item ${type === item.id ? "active" : ""}`}>
                                    <ItemImage >
                                        <Image src={item.Image} alt="Art-Image" width={48} height={48} />
                                    </ItemImage>
                                    <BoxTypo variant="body2">{item.title}</BoxTypo>
                                </ItemBox>
                            ))}
                        </SelectItemBox>
                        <ProjectDetailsBox>
                            <SubTitleTypo variant="h5" className="mb__0">Project Details</SubTitleTypo>
                            <Label variant="caption">Name your collection</Label>
                            <Input className="input-p-5" placeholder={"Collection Name"} />
                            <Label variant="caption">Select a category</Label>
                            <DropdownWrapper>
                                <ListingsDropdown options={Dropdownlists} />
                            </DropdownWrapper>
                            <Label variant="caption">Describe your collection </Label>
                            <TextAreaWithLabel className="p-5" variant="border" />
                        </ProjectDetailsBox>
                        <ProjectMedia>
                            <SubTitleTypo variant="h5">Project Media</SubTitleTypo>
                            <NFTPreviewBox>
                                <NFTPreviewBox1 className="nft__Box" >
                                    <Label variant="caption" className="mb__5">Profile Picture (Dimensions - 512 x 512)</Label>
                                    <ImageUpload id="profile-1" />
                                </NFTPreviewBox1>
                                <NFTPreviewBox2 >
                                    <Label variant="caption" className="mb__5">Profile Banner (Dimensions 1800 x 400)</Label>
                                    <ImageUpload id="profile-2" />
                                </NFTPreviewBox2>
                            </NFTPreviewBox>
                        </ProjectMedia>
                        <NFTPreview>
                            <Label variant="caption" className="mb__5">Profile Picture (Dimensions - 512 x 512)</Label>
                            <NFTPreviewBox>
                                <NFTPreviewBox1>
                                    <ImageUpload id="profile-3" />
                                </NFTPreviewBox1>
                                <NFTPreviewBox2 >
                                    <ImageUpload id="profile-4" />
                                </NFTPreviewBox2>
                            </NFTPreviewBox>
                            <NFTPreviewBox className="mt__16">
                                <NFTPreviewBox1>
                                    <ImageUpload id="profile-5" />
                                </NFTPreviewBox1>
                                <NFTPreviewBox2 >
                                    <ImageUpload id="profile-6" />
                                </NFTPreviewBox2>
                            </NFTPreviewBox>
                        </NFTPreview>
                        <BodyContent>
                            <SubTitleTypo variant="h5" className="mb__0">Project URLs</SubTitleTypo>
                            <Label variant="caption">Whitepaper</Label>
                            <Input className="input-p-5" placeholder={"e.g. www.whitepaper.com"} />
                            <Label variant="caption">Website</Label>
                            <Input className="input-p-5" placeholder={"e.g. www.website.com"} />
                            <Label variant="caption">Discord Server</Label>
                            <Input className="input-p-5" placeholder={"e.g. https://discord.com/invite/E2ZN28Z7qN"} />
                            <Label variant="caption">Twitter Server</Label>
                            <Input className="input-p-5" placeholder={"e.g. https://discord.com/invite/E2ZN28Z7qN"} />
                        </BodyContent>
                        <BodyContent>
                            <SubTitleTypo variant="h5" className="mb__0">Road Map</SubTitleTypo>
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
                                <TextAreaWithLabel className="p-5" variant="border" placeholder={"Header (max. 50 characters)"} />
                            </TextareaWrapper>
                            <Label variant="caption">Bulletpoint 05</Label>
                            <Input className="input-p-5" placeholder={"Header (max. 50 characters)"} />
                            <TextareaWrapper>
                                <TextAreaWithLabel className="p-5" variant="border" />
                            </TextareaWrapper>
                        </BodyContent>
                        <BodyContent>
                            <SubTitleTypo variant="h5" className="mb__0">Upload Assets</SubTitleTypo>
                            <Ziptext variant="body2">
                                Upload a Zip-Folder
                            </Ziptext>
                            <ImageUpload id="zip-folder" />
                        </BodyContent>
                        <MintsDetails>
                            <SubTitleTypo variant="h5" className="mb__0">Mint Details</SubTitleTypo>
                            <PlannedMint>
                                <PlannedInput>
                                    <Label variant="caption">Planned Mint Date</Label>
                                    <Date
                                        defaultValue={values.mintDate}
                                        disablePast
                                        views={['year', 'month', 'day']}
                                        placeholder={"Mint Date"}
                                    />
                                </PlannedInput>
                                <PlannedInput>
                                    <Label variant="caption">Planned Mint Time</Label>
                                    <Time className="input-p-5" defaultValue={values.minTime} disablePast placeholder={"Mint Time"} />
                                </PlannedInput>
                            </PlannedMint>
                            <PlannedMint>
                                <PlannedInput>
                                    <Label variant="caption">Mint Price</Label>
                                    <MintPriceWrapper>
                                        <Input className="input-p-5" placeholder={"Price"} InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <MinPriceIcon />
                                                </InputAdornment>
                                            ),
                                        }} />
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
                                        {
                                            values.mintType === "random" ?

                                                <Button variant="contained" className="random__btn" onClick={() => handleChange("mintType", "random")} >Random</Button>
                                                :
                                                <RevealButton variant="contained" onClick={() => handleChange("mintType", "random")} >Random</RevealButton>
                                        }
                                        {
                                            values.mintType === "reveal" ?

                                                <Button variant="contained" className="random__btn" onClick={() => handleChange("mintType", "reveal")} >Late Reveal</Button>
                                                :
                                                <RevealButton variant="contained" onClick={() => handleChange("mintType", "reveal")} >Late Reveal</RevealButton>
                                        }
                                    </RevealWrapper>
                                </PlannedInput>
                                <PlannedInput className="mint__type">
                                    <Label variant="caption">Placeholder (only for “Late Reveal”)</Label>
                                    <ImageUpload id="Late Reveal" />
                                </PlannedInput>
                            </PlannedMint>
                        </MintsDetails>
                        <BodyContent>
                            <SubTitleTypo variant="h5" className="mb__0">Contact Information</SubTitleTypo>
                            <Label variant="caption">E-Mail Address</Label>
                            <Input className="input-p-5" placeholder={"e.g. project@gmail.com"} />
                        </BodyContent>
                        <BodyContent>
                            <SubTitleTypo variant="h5">Finalize</SubTitleTypo>
                            <FinalizeWrapper>
                                <Button variant="contained" className="publish">Publish</Button>
                                <DiscardButton variant="contained">Discard all</DiscardButton>
                            </FinalizeWrapper>
                        </BodyContent>
                    </Grid>
                </Grid>
            </Container>
            <BlockchainWrapper>
                <SubTitleTypo variant="h5" className="mt__34">Choose blockchain</SubTitleTypo>
                <BlockchainBox>
                    {data.map((item, index) => (
                        <BlockChainMainBox key={`Blockchain-item-${item.id}`}>
                            <Label variant="caption" className="mb__5">{item.heading}</Label>
                            <BlockChainItem status={""} >
                            {/* <BlockChainItem status={(item.id === "2" && type) ? "complete" : ""} > */}
                                <BlockChainTitle variant={"body2"}>{(item.id === "2" && type) ? "Action complete" : "Missing action"}</BlockChainTitle>
                                <BlockChainIcon>
                                    { <IncompleteIcon />}
                                    {/* {(item.id === "2" && type) ? <CheckRoundedIcon /> : <IncompleteIcon />} */}
                                </BlockChainIcon>
                            </BlockChainItem>
                        </BlockChainMainBox>
                    ))}
                </BlockchainBox>
            </BlockchainWrapper>
        </Wrapper >
    )
}