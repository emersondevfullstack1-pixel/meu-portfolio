import {
  AppBar,
  MenuItem,
  Toolbar,
  styled,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const StyledToobar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  // Itens do menu
  const menuItems = ["Sobre", "Habilidades", "Projetos"];
  // Responsivo: mostra menu hamburguer em telas pequenas
  return (
    <>
      <AppBar position="absolute">
        <StyledToobar>
          <div className="nav-menu" style={{ display: "flex", gap: 16 }}>
            {menuItems.map((item) => (
              <MenuItem
                key={item}
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                    margin: "top",
                    padding: "20px 150px",
                  },
                }}
              >
                {item}
              </MenuItem>
            ))}
          </div>
          <IconButton
            color="inherit"
            edge="end"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{
              display: {
                xs: "block",
                md: "none",
                position: "fixed",
                cursor: "pointer",
                left: "20px",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </StyledToobar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
        PaperProps={{
          sx: { backgroundColor: "#232323" }, //cor de fundo do menu-hamburguer
        }}
      >
        <List sx={{ width: 150 }}>
          {menuItems.map((item) => (
            <ListItem key={item} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary={item} sx={{ color: "#FFF" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
