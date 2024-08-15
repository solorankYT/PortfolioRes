import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import AboutSection from "../About/AboutSection";
import LandingPage from "../Main/LandingPage";
import PortfolioPage from "../Portfolio/PortfolioPage";
import ContactSection from "../Contact/ContactSection";


export const router = createBrowserRouter([
  {
    path:"/", element: <App />,
    children:[
    {path:"", element:<LandingPage />},
    {path:"aboutpage", element:<AboutSection />},
    {path:"portfolio", element:<PortfolioPage />},
    {path:"contact", element:<ContactSection />},
    ],
  },
]);