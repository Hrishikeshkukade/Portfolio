import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { auth } from "../../firebase";
import GoogleIcon from "@mui/icons-material/Google";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Root = styled('div')({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
});

const SignInButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: "#4285F4",
  color: "white",
  "&:hover": {
    backgroundColor: "#357ae8",
  },
}));

function Login() {
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
          const provider = new GoogleAuthProvider();
          const userCredential = await signInWithPopup(auth, provider);
          const user = userCredential.user;
    
          console.log("User signed in with Google:", user);
    
          navigate("/meeting-room");
        } catch (error) {
          console.error("Error signing in with Google:", error);
        //   toast.error("Error signing in with Google");
        }
      };

  return (
    <Container>
      <Root>
        <Typography variant="h4" gutterBottom>
          Sign In
        </Typography>
        <SignInButton
          variant="contained"
          startIcon={<GoogleIcon />}
          onClick={handleGoogleSignIn}
        >
          Sign In with Google
        </SignInButton>
      </Root>
    </Container>
  );
}

export default Login;

