import React, { useEffect, useState } from "react";
import { UploadIcon } from "../Svgs";
import CloseIcon from '@mui/icons-material/Close';
import { CrossIconWrapper, ImageContainer, ImageInput, ImagePreview, ImageUploadContainer, Label, Overlay } from "./styles";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { createClient } from "@supabase/supabase-js";
import { nameGenerator } from "@/helpers/nameGenerator";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;


const onUpload = async (file) => {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const name = `public/${nameGenerator(file)}`;
    const s = await supabase.storage.from("avatars").upload(name, file, {
        cacheControl: "3600",
        upsert: false,
    });
    if (!s.error) {
        const b = supabase.storage.from("avatars").getPublicUrl(name);
        return b;
    }
    else {
        return s;
    }
};


// ImageUpload component
export const ImageUpload = ({ url, id, className, alt, onChange }) => {
    const [selectedImage, setSelectedImage] = useState(url || null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onError = (message) => {
        toast.error(message, {
            position: "top-right",
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "light",
        })
    };

    const handleImageChange = async (event) => {
        const file = event.target.files[0];

        setError("")
        if (file) {
            setIsLoading(true)
            if (onUpload) {

                const r = await onUpload(file)
                setIsLoading(false)
                if (r.error) {
                    onError(r.error.message)
                    setError(r.error.message)
                }
                else {
                    setSelectedImage(r.data.publicUrl);
                }
            }
        }
    };

    const onCancel = (e) => {
        setSelectedImage(url || null)
    }

    const renderImagePreview = () => {
        if (!isLoading && selectedImage && !error) {
            return <>
                <Overlay className="icon">
                    <CrossIconWrapper onClick={onCancel}  >
                        <CloseIcon />
                    </CrossIconWrapper>
                </Overlay>

                <ImagePreview src={selectedImage} alt={alt || "Selected"} layout="fill" />
            </>
        } else {
            return (
                <>
                    <UploadIcon />
                    <Label variant="body1" className={`${error ? "error" : ""}`} >{isLoading ? "Uploading" : error || "Select an image"}</Label>
                </>
            );
        }
    };

    useEffect(() => {
        onChange && onChange(selectedImage)
    }, [selectedImage])

    return (
        <ImageUploadContainer className={` image-upload ${className}`} >
            <ImageContainer htmlFor={id}>
                <ImageInput
                    accept="image/*"
                    id={id}
                    type="file"
                    onChange={handleImageChange}
                />
                {renderImagePreview()}
            </ImageContainer>
        </ImageUploadContainer>
    );
}

