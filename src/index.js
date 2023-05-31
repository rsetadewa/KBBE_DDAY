import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  useLocation
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./components/Navbar";
import "./App";
import "./App.css";
import About from "./routes/About";
import APIPage from "./routes/APIPage";
import Main from "./App";
import RWord from "./Word";
import "./PageTransitions.css";

const AppLayout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "random",
        element: <RWord />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "APIPage",
        element: <APIPage />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
