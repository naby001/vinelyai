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
  "& svg": {
    color: "#00ff00",
    fontSize: 32,
  },
}))

const drawerItems = [
  { text: "Search", icon: <SearchIcon />, link: "/search" },
  { text: "Connections", icon: <ConnectWithoutContactIcon /> },
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
          sx={{ position: "fixed", top: 16, left: 16, color: "white", backgroundColor: "black" }}
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
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <Typography variant="h6" component="div">
            ChainHive.ai
          </Typography>
        </Logo>
        <List>
          {drawerItems.map((item) => (
            <ListItemButton
              key={item.text}
              sx={{ color: "white" }}
              component="a"
              href={item.link || "#"}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </StyledDrawer>
    </>
  )
}
