"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material"
import { Send as SendIcon, PersonAdd as PersonAddIcon } from "@mui/icons-material"
import { styled } from "@mui/material/styles"
import Navbar from "../components/Navbar" // Import Navbar component

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
}))

const InviteTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    color: "white",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: theme.spacing(1),
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.2)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255,255,255,0.3)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00ff00",
    },
  },
}))

export default function FriendsInterface() {
  const [currentFriends] = useState([
    { id: 1, name: "Saptarshi Sinha", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "Mridul Das", avatar: "/placeholder.svg?height=40&width=40" },
  ])

  const [suggestedFriends] = useState([
    { id: 3, name: "Michael Schumacher", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 4, name: "Nasrin", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 5, name: "Jaswinder Singh", avatar: "/placeholder.svg?height=40&width=40" },
   
  ])

  return (
    <Box sx={{ display: "flex", height: "100%", backgroundColor: "#121212", p: 3 }}>
      <Navbar />
      <Box sx={{ flexGrow: 1, maxWidth: 800, margin: "0 auto", p: 3, color: "white" }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Friends
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: "rgba(255,255,255,0.7)" }}>
          Friends can search each other&apos;s connections
        </Typography>

        <StyledPaper>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Invite Friends
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: "rgba(255,255,255,0.7)" }}>
            Share a link or send an email invitation to your friends.
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <InviteTextField fullWidth variant="outlined" placeholder="Enter email address or name" size="small" />
            <IconButton
              sx={{
                backgroundColor: "#00ff00",
                color: "black",
                "&:hover": { backgroundColor: "#00dd00" },
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </StyledPaper>

        <List>
          {currentFriends.map((friend) => (
            <ListItem
              key={friend.id}
              sx={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: 1,
                mb: 1,
              }}
            >
              <ListItemAvatar>
                <Avatar src={friend.avatar} />
              </ListItemAvatar>
              <ListItemText primary={friend.name} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Suggested Friends
        </Typography>

        <List>
          {suggestedFriends.map((friend) => (
            <ListItem
              key={friend.id}
              sx={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: 1,
                mb: 1,
              }}
            >
              <ListItemAvatar>
                <Avatar src={friend.avatar} />
              </ListItemAvatar>
              <ListItemText primary={friend.name} />
              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  sx={{
                    color: "#00ff00",
                    border: "1px solid #00ff00",
                    "&:hover": { backgroundColor: "rgba(0,255,0,0.1)" },
                  }}
                >
                  <PersonAddIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}

