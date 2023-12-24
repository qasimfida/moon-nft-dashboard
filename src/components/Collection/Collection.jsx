import Image from "next/image";
import React from "react";
import { Wrapper, Text, Title, CollectionWrapper, ActionButtons } from "./styles";
import { Button } from "@mui/material";
import DeleteIcon from "../Svgs/DeleteIcon";
import EditIcon from "../Svgs/EditIcon";

export const Collection = ({ onEdit, onDelete, isEditable }) => {
	return (
		<Wrapper>
			<CollectionWrapper>
				<Text>1</Text>
				<Image
					height={64}
					width={64}
					src="/images/collection.png"
					alt="collection"
					style={{ borderRadius: "12px" }}
				/>
				<Title>Celestial Spirits</Title>
			</CollectionWrapper>
			<ActionButtons>
				{isEditable && <EditIcon onClick={onEdit} />}
				<DeleteIcon onClick={onDelete} />
			</ActionButtons>
		</Wrapper>
	);
};
