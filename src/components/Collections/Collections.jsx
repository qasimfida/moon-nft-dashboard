import React from "react";
import { CollectionsWrapper } from "./styles";
import Collection from "../Collection";
import { useRouter } from "next/navigation";

export const Collections = ({ onEdit, onDelete, isEditable, onClick }) => {
	return (
		<CollectionsWrapper>
			<Collection isEditable={isEditable} onEdit={onClick} />
			<Collection isEditable={isEditable} onEdit={onClick} />
			<Collection isEditable={isEditable} onEdit={onClick} />
			<Collection isEditable={isEditable} onEdit={onClick} />
			<Collection isEditable={isEditable} onEdit={onClick} />
		</CollectionsWrapper>
	);
};
