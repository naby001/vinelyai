import { Box, Typography, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LinkedIn, Twitter } from "@mui/icons-material";
import Navbar from "../components/Navbar";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  minWidth:400
}));

const ConnectionCard = ({ icon: Icon, title, color }) => (
  <StyledPaper >
    <Box sx={{ display: "flex", alignItems: "center", gap: 2}}>
      <Icon sx={{ fontSize: 32, color }} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="body2"
          sx={{ color: "rgba(255,255,255,0.8)", mb: 1, display:'flex', alignItems:'flex' }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
    <Button
      variant="outlined"
      sx={{
        color: "white",
        borderColor: "#15ab33",
        backgroundColor: "#15ab33",
        "&:hover": {
          borderColor: "#13992e",
          backgroundColor: "#15ab33",
        },
        "&:focus": {
          borderColor: "#15ab33",
        },
        alignSelf: "flex-start",
      }}
    >
      Connect
    </Button>
  </StyledPaper>
);

export default function ConnectionsInterface() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        color: "white",
        backgroundColor: "#121212",
      }}
    >
      <Navbar />
      <Box sx={{ flexGrow: 1, p: 3, pt: 8, margin: "0 auto", maxWidth: 900 }}>
        <Typography variant="h5" sx={{ mb: 1, fontSize:30 }}>
          Connections
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 1, color: "rgba(255,255,255,0.8)", fontSize:20 }}
        >
          Make your network searchable to you, your friends, and groups
          you&apos;re in. We never share, sell, or use your data to train AI
          models.
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 4, color: "rgba(255,255,255,0.8)", fontSize:20 }}
        >
          Processing typically takes a couple hours.
        </Typography>
        <Box sx={{ maxWidth: 400, display:'flex', flexDirection:'row', gap:5 }}>
          <ConnectionCard
            icon={LinkedIn}
            title="Import a list of your LinkedIn connections"
            color="#0077b5"
          />
          <ConnectionCard
            icon={Twitter}
            title="Import a list of your Twitter followers"
            color="#1DA1F2"
          />
        </Box>
      </Box>
    </Box>
  );
}
