import { useState } from "react"
import {
  Box,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Drawer,
  ListItemButton,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import { LinkedIn, Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material"
import SearchIcon from "@mui/icons-material/Search"
import PeopleIcon from "@mui/icons-material/People"
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact"
import logo from "../assets/comet.png"

// Custom styled components
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 240,
    backgroundColor: "#1a1a1a",
    color: "white",
    borderRight: "1px solid rgba(255,255,255,0.1)",
  },
}))

const Logo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  gap: theme.spacing(1),
  "& img": {
    width: 40,
    height: 40,
  },
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
  },
}))

const drawerItems = [
  { text: "Search", icon: <SearchIcon />, link: "/search" },
  { text: "Connections", icon: <ConnectWithoutContactIcon />, link: "/connections" },
  { text: "Friends", icon: <PeopleIcon />, link: "/friends" },
]

export default function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ position: "fixed", top: 16, left: 16, color: "white", backgroundColor: "black", "&:hover": { backgroundColor: "#15ab33" } }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <StyledDrawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? drawerOpen : true}
        onClose={handleDrawerToggle}
      >
        <Logo>
          <img src={logo} alt="ChainHive.ai Logo" />
          <Typography variant="h6" component="div">
            ChainHive.ai
          </Typography>
        </Logo>
        <List>
          {drawerItems.map((item) => (
            <ListItemButton
              key={item.text}
              sx={{ color: "white", "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}
              component="a"
              href={item.link || "#"}
            >
              <ListItemIcon sx={{ color: "white", minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </StyledDrawer>
    </>
  )
}
