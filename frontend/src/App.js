import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { useContext } from "react";
import { Store } from "./Store";

export const URL = `http://localhost:8000`;

function App() {
  const { state } = useContext(Store);
  const { userInfo } = state;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={userInfo ? <HomeScreen /> : <LoginScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
