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
  Avatar,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import { LinkedIn, Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material"
import SearchIcon from "@mui/icons-material/Search"
import PeopleIcon from "@mui/icons-material/People"
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact"
import logo from "../assets/comet.png"
import { useSelector } from "react-redux"
import { useTransform } from "framer-motion"
import UserMenu from "./UserMenu"

// Custom styled components
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 240,
    backgroundColor: "rgb(54, 69, 79,0.4)",
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
  const [selectedTab, setSelectedTab] = useState('') // Track the selected tab

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleTabClick = (tab) => {
    setSelectedTab(tab)
  }
  const user=useSelector((state)=>state.user);

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
            vinely.ai
          </Typography>
        </Logo>
        <List sx={{padding:'10px'}}>
          {drawerItems.map((item) => (
            <ListItemButton
              key={item.text}
              sx={{
                color: "white",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                fontWeight: selectedTab === item.text ? 'bold' : 'normal', // Bold for selected tab
                borderRadius:'10px'
              }}
              component="a"
              href={item.link || "#"}
              onClick={() => handleTabClick(item.text)} // Set selected tab on click
            >
              <ListItemIcon sx={{ color: "white", minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: 16,
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "white",
          }}
        >
          {/* <Avatar
            alt="Maurya Samanta"
            src="https://via.placeholder.com/40" // Replace with the actual avatar URL
            sx={{ width: 40, height: 40 }}
          />
          <Typography variant="body2" sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>{user.firstName} {user.lastName}</Typography>
        */}
        <UserMenu/>
        </Box> 
      </StyledDrawer>
    </>
  )
}
