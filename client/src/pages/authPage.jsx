import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Card, 
  CircularProgress, 
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import Google from '@mui/icons-material/Google';
import logo from "../assets/comet.png"

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth process
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Box 
      sx={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        backgroundColor: 'black',
        p: isMobile ? 2 : 0
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', maxWidth: 400 }}
      >
        <Card 
          sx={{ 
            width: '100%', 
            p: isMobile ? 2 : 4, 
            borderRadius: 3, 
            position: 'relative', 
            overflow: 'hidden' 
          }}
        >
          {/* Logo Placeholder */}
          <img 
            style={{ 
              position: 'absolute', 
              top: 16, 
              left: 16, 
              width: 40, 
              height: 40, 
              borderRadius: 2 
            }} 
            src={logo}
          />

          <form onSubmit={handleSubmit}>
            <Button 
              fullWidth 
              variant="outlined" 
              startIcon={<Google />}
              sx={{ mb: 3, mt: 7 }}
            >
              Continue with Google
            </Button>

            <Divider sx={{ my: 2 }}>or</Divider>

            <AnimatePresence mode="wait">
              {isLogin ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 600 }}>Email</Typography>
                    <TextField 
                      fullWidth 
                      placeholder="Enter your email" 
                      variant="outlined" 
                      sx={{ mb: 2 }} 
                    />
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 600 }}>Password</Typography>
                    <TextField 
                      fullWidth 
                      placeholder="Enter your password" 
                      type="password" 
                      variant="outlined" 
                    />
                  </Box>
                </motion.div>
              ) : (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: isMobile ? 'column' : 'row', 
                    gap: 2, 
                    mb: 2 
                  }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1" sx={{ mb: 1, fontWeight: 600 }}>First Name</Typography>
                      <TextField 
                        fullWidth 
                        placeholder="First name" 
                        variant="outlined" 
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1" sx={{ mb: 1, fontWeight: 600 }}>Last Name</Typography>
                      <TextField 
                        fullWidth 
                        placeholder="Last name" 
                        variant="outlined" 
                      />
                    </Box>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 600 }}>Email</Typography>
                    <TextField 
                      fullWidth 
                      placeholder="Enter your email" 
                      variant="outlined" 
                      sx={{ mb: 2 }} 
                    />
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 600 }}>Password</Typography>
                    <TextField 
                      fullWidth 
                      placeholder="Create a strong password" 
                      type="password" 
                      variant="outlined" 
                    />
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>

            <Button 
              fullWidth 
              variant="contained" 
              type="submit" 
              disabled={isLoading}
              sx={{ 
                mb: 2, 
                position: 'relative', 
                backgroundColor:'#635acc',
                py: 1.5
              }}
            >
              {isLoading ? (
                <CircularProgress 
                  size={24} 
                  sx={{ position: 'absolute', color: 'white' }} 
                />
              ) : (
                isLogin ? 'Login' : 'Signup'
              )}
            </Button>

            <Box sx={{ textAlign: 'center' }}>
              {isLogin ? (
                <Typography variant="body2">
                  Don't have an account yet? 
                  <Button 
                    onClick={() => setIsLogin(false)} 
                    sx={{ ml: 1 }}
                  >
                    Signup
                  </Button>
                </Typography>
              ) : (
                <Typography variant="body2">
                  Already have an account? 
                  <Button 
                    onClick={() => setIsLogin(true)} 
                    sx={{ ml: 1 }}
                  >
                    Login
                  </Button>
                </Typography>
              )}
            </Box>
          </form>
        </Card>
      </motion.div>
    </Box>
  );
};

export default AuthPage;