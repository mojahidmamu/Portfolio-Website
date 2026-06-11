import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main"; 
import Home from "../Pages/Homes/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Projects from "../Pages/Projects/Projects"; 
import Contact from "../Pages/Contact/Contact"; 
import Blog from "../Pages/FeautureBlog/Blog";
import BlogDetailsCard from "../Pages/FeautureBlog/BlogDetailsCard";
import MySkill from "../Pages/MySkill/MySkill";
import Education from "../Pages/Education/Education";
import About from "../Pages/AboutMe/About"; 
import AdminDashboard from "../Dashboard/AdminDashboard";
const adminRoute = import.meta.env.VITE_ADMIN_ROUTE;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/about',
          element: <About></About>,
        },
        {
          path: '/skill', 
          element: <MySkill></MySkill>,
        },
        {
          path: '/projects',
          element: <Projects></Projects>,
        },
        {
          path: "/blogs",
          element: <Blog></Blog>,
        },
        {
          path: "/education", 
          element: <Education></Education>,
        },
        {
          path: "/blogs/:id",
          element: <BlogDetailsCard></BlogDetailsCard>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: `/${adminRoute}`,
          element: <AdminDashboard></AdminDashboard>,
        }
    ],
  },
]);
