"use client"

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
} from "@mui/material"
import { styled } from "@mui/material/styles"
import { LinkedIn, Close as CloseIcon, Search as SearchIcon } from "@mui/icons-material"
import Navbar from "../components/Navbar"

const SearchContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#1a1a1a",
  minHeight: "100vh",
  color: "white",
}))

export default function SearchInterface() {
  const [searchResults, setSearchResults] = useState([
    { name: "Maurya Samanta", id: 1 },
    { name: "Arya Bhattacharya", id: 2 },
    { name: "Bhaskar Boss", id: 3 },
    { name: "Md. Touseef", id: 4 },
  ])

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <SearchContainer component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ maxWidth: 800, margin: "0 auto" }}>
          <TextField
            fullWidth
            placeholder="Software Developers from Jadavpur University"
            variant="outlined"
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                color: "white",
                backgroundColor: "rgba(255,255,255,0.05)",
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
            }}
            InputProps={{
              endAdornment: (
                <IconButton sx={{ color: "#00ff00" }}>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />

          <Typography variant="body2" sx={{ mb: 2, color: "rgba(255,255,255,0.7)" }}>
            We searched from 575 connections and we found these results for your search:
          </Typography>

          <List>
            {searchResults.map((result) => (
              <ListItem
                key={result.id}
                sx={{
                  mb: 1,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: 1,
                }}
              >
                <ListItemText primary={result.name} />
                <ListItemSecondaryAction>
                  <IconButton size="small" sx={{ color: "white", mr: 1 }}>
                    <CloseIcon />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "#0077b5" }}>
                    <LinkedIn />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Box>
      </SearchContainer>
    </Box>
  )
}

