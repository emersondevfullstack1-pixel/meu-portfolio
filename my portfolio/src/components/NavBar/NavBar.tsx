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
    justifyContent: "space-evenly",
    alignItems: "center",
  }));

  // Itens do menu
  const menuItems = ["About", "Skills", "Projects"];

  // Responsivo: mostra menu hamburguer em telas pequenas
  return (
    <>
      <AppBar position="absolute">
        <StyledToobar>
          <div className="nav-menu" style={{ display: "flex", gap: 16 }}>
            {menuItems.map((item) => (
              <MenuItem
                key={item}
                sx={{ display: { xs: "none", md: "block" } }}
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
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </StyledToobar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <List sx={{ width: 200 }}>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
