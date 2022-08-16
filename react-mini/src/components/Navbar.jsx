import  React,{useState} from 'react';

import styled from "styled-components";
import { Search } from "@material-ui/icons";
import { Badge, Link } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

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
  font-size: 40px;
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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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

            <Menuitem>
            <Link href={"/login"} underline="none"color={"black"}>
                Sign In
              </Link>
               {/* <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 30, height: 30 }}>User</Avatar>
          </IconButton>
          <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu> */}
              
              </Menuitem>
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
