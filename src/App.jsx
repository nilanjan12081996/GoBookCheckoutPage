import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/RoutesConfig";
import "./App.css";
import "./assets/css/custom.css";

function App() {

  const allRoutes = createBrowserRouter(AllRoutes);
  return <RouterProvider router={allRoutes} />;
}

export default App;
