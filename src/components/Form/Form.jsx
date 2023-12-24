import React from "react";
import { ActionButton, ActionButtons, FromWrapper, Group, Input, Label } from "./styles";

export const Form = ({ label }) => {
	return (
		<FromWrapper>
			<Group>
				<Label>Issuer Address</Label>
				<Input placeholder="Placeholder here ..." />
			</Group>
			<Group>
				<Label>Taxon</Label>
				<Input placeholder="Placeholder here ..." />
			</Group>
			<Group>
				<Label>Collection name</Label>
				<Input placeholder="Placeholder here ..." />
			</Group>
			<Group>
				<Label>Vanity url</Label>
				<Input placeholder="Placeholder here ..." />
			</Group>
			<Group>
				<Label>Royalties</Label>
				<Input placeholder="Placeholder here ..." />
			</Group>
      <ActionButtons>
        <ActionButton variant="contained" >Save</ActionButton>
        <ActionButton variant="outlined" >Cancel</ActionButton>
      </ActionButtons>
		</FromWrapper>
	);
};
