import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-scroll"; // 👈 Importa o Link do react-scroll
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuItems = ["Sobre", "Habilidades", "Projetos"];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#232323" }}>
        <StyledToolbar>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 60,
              justifyContent: "center",
            }}
          >
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <MenuItem sx={{ color: "#fff", cursor: "pointer" }}>
                  {item}
                </MenuItem>
              </Link>
            ))}
          </Box>

          <IconButton
            color="inherit"
            edge="end"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { backgroundColor: "#232323", width: 200 },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItem button>
                <ListItemText primary={item} sx={{ color: "#fff" }} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
