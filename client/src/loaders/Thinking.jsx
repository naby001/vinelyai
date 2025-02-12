import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const ThinkingText = () => {
  return (
    <Typography
      component={motion.div}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      sx={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#555",
        //textAlign: "center",
        letterSpacing: "2px",
        //fontStyle: "italic",
      }}
    >
      Thinking...
    </Typography>
  );
};

export default ThinkingText;
