import React from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import { Badge, Link } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 10px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
`;
// const Language = styled.span`
//     font-size: 15px;
//     cursor: pointer;
// `
const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-right: 1px;
`;

const Input = styled.input`
  border: none;
  width: 100px;
`;
const Logo = styled.h1`
  font-weight: lighter;
  font-size: 30px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  justify-content: center;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Menuitem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 30px;
  text-decoration: none;
`;
function Navbar() {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Menuitem>
              <Link href={"/"} underline="none"color={"black"}>
                Shop
              </Link>
            </Menuitem>
            <Menuitem>
            <Link href={"/products"} underline="none"color={"black"}>
                Sale
              </Link>
            </Menuitem>
            <Menuitem>About Us</Menuitem>
          </Left>

          <Center>
            <Logo>Organic Harmony</Logo>
          </Center>
          <Right>
            <SearchContainer>
              <Input />
              <Search style={{ color: "gray", fontSize: 15 }} />
            </SearchContainer>

            <Menuitem><Link href={"/login"} underline="none"color={"black"}>
                Sign In
              </Link></Menuitem>
            <Menuitem>
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Menuitem>
          </Right>
        </Wrapper>
      </Container>
    </div> 
  );
}

export default Navbar;
