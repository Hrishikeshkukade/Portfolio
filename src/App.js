import { auth } from "./firebase";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import useAuth from "./api/useAuth";
// import Profile from "./Components/Profile/Profile";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./Components/Login/Login";
import Video from "./Components/Video/Video";






function App() {
  const user = auth();
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  // const theme = useTheme();


  useEffect(() => {
    // Check the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticatedUser(user);
      }
    });

    return () => {
      unsubscribe(); // Clean up the listener
    };
  }, []);
  const ProtectedRoute = ({ element }) => {
    if (authenticatedUser) {
      return element;
    } else {
      // Redirect to the sign-in page or any other route as needed
      return <Navigate to="/" />;
    }
  };

  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<Login/>} />
       
        
        {user && (
          <Route path="/meet" element={<Video />} />
        )}
        
      </Routes>
     
   
    </div>
  );
}

export default App;
