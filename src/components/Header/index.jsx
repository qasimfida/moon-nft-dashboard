import { Box } from "@mui/material";
import SearchBar from "../SearchBar";
import { Wrapper, Title, ActionButton, Top } from "./styles";

const Header = ({ title, onClick, handleSearch, buttonLabel }) => {
	return (
		<Wrapper className={handleSearch ? "mb-60" : "mb-14"}>
			<Top>
				<Title>{title}</Title>
				{buttonLabel && (
					<ActionButton variant="contained" onClick={onClick}>
						{buttonLabel}
					</ActionButton>
				)}
			</Top>
			{handleSearch && <SearchBar simpleSearch />}
		</Wrapper>
	);
};
export default Header;
