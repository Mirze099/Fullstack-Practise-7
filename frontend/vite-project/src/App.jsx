import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./routes/Routes";
const route = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
