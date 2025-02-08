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
  Collapse,
  Button,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip
} from "@mui/material"
import { styled } from "@mui/material/styles"
import { LinkedIn, Close as CloseIcon, Search as SearchIcon } from "@mui/icons-material"
import Navbar from "../components/Navbar"
import {motion} from 'framer-motion';
import logo from "../assets/comet.png";
import XIcon from '@mui/icons-material/X';
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const SearchContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#1a1a1a",
  minHeight: "100vh",
  color: "white",
}))

export default function SearchInterface() {
  const [searchResults, setSearchResults] = useState([
    { 
      name: "Anish De", 
      id: 1, 
      supportingStatements: "Software Engineer at Microsoft, Bangalore."
    },
    { 
      name: "Shivam Cholin", 
      id: 2, 
      supportingStatements: "Frontend Developer at Amazon, Bangalore."
    },
    { 
      name: "Subham Sahu", 
      id: 3, 
      supportingStatements: "Backend Developer at Slang Labs, Bangalore."
    },
    { 
      name: "Kush Mishra", 
      id: 4, 
      supportingStatements: "Software Architect at Zeta, Bangalore."
    }
  ]);
  
  const [searched,setsearched]=useState(false);
  const [open,setOpen]=useState(false);
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <SearchContainer component="main" sx={{ flexGrow: 1, p: 3, alignItems:!searched&&'center', justifyContent:!searched&&'center', display:'flex' }}>
        
        <Box sx={{ minWidth: 800, margin: "0 auto"}}>
        {!searched && (<motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center'
          }}
        >
          <img src={logo} style={{width:50, height:50, marginBottom:10}}/>
          <Typography sx={{display:'flex', alignItems:'center', justifyContent:'center', fontSize:40, marginLeft:5}}>Search People from your Network</Typography>
          </motion.div>)}
        <TextField
            fullWidth
            placeholder="Software Developers from Jadavpur University"
            variant="outlined"
            autoComplete="off"
            sx={{
              
              mb: 3,
              "& .MuiOutlinedInput-root": {
                color: "white",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: 5,
                "& fieldset": {
               //   borderColor: "rgba(255,255,255,0.2)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255,255,255,0.3)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#15ab33",
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <IconButton sx={{ color: "#15ab33" }} onClick={()=>{setsearched(true)}}>
                  <ArrowForwardIcon />
                </IconButton>
              ),
            }}
          />
     
          {searched && (<motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="body2" sx={{ mb: 2, color: "rgba(255,255,255,0.7)" }}>
            We searched from 575 connections and we found these results for your search:
          </Typography>
          <Box sx={{ my: 2, width: 500 }}>
      <Accordion
        sx={{
          backgroundColor: "rgba(255,255,255,0.05)",
          color: "white",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 5,
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore sx={{ color: "white" }} />}
          
        >
          <Typography fontWeight="bold">Show Thinking</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ mb: 2 }}>
  <Typography variant="h6" fontWeight="bold" gutterBottom>
    🧠 Traits
  </Typography>
  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
    <Chip label="Software developer"  sx={{backgroundColor:'rgba(255,255,255,0.1)',color:"white"}} />
    <Chip label="Experience in product-based companies" sx={{backgroundColor:'rgba(255,255,255,0.1)',color:"white"}} />
    <Chip label="Based in Bangalore" sx={{backgroundColor:'rgba(255,255,255,0.1)',color:"white"}}  />
  </Box>
</Box>

<Box sx={{ mb: 2 }}>
  <Typography variant="h6" fontWeight="bold" gutterBottom>
    🔑 Key Phrases
  </Typography>
  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
    <Chip label="Proficient in building scalable software solutions" sx={{backgroundColor:'rgba(255,255,255,0.1)',color:"white"}} />
    <Chip label="Expertise in full-stack development" sx={{backgroundColor:'rgba(255,255,255,0.1)',color:"white"}}  />
    <Chip label="Experience with microservices and cloud platforms" sx={{backgroundColor:'rgba(255,255,255,0.1)',color:"white"}}  />
    <Chip label="Worked in top-tier product-based companies" sx={{backgroundColor:'rgba(255,255,255,0.1)',color:"white"}}  />
  </Box>
</Box>

        </AccordionDetails>
      </Accordion>
    </Box>

          <List>
  {searchResults.map((result) => (
    <ListItem
      key={result.id}
      sx={{
        mb: 1,
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 5,
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.2)",
        },
        cursor:'pointer'
      }}
    >
      <ListItemText
        primary={
          <Typography variant="body1" fontWeight="bold">
            {result.name}
          </Typography>
        }
        secondary={
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
            {result.supportingStatements}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <IconButton size="small" sx={{ mr: 1 }}>
          <XIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: "#0077b5" }}>
          <LinkedIn />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ))}
</List>

          </motion.div>)}
        </Box>
      </SearchContainer>
    </Box>
  )
}

