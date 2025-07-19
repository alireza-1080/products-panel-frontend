import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import "./index.css";
import RootLayout from "./RootLayout.tsx";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import AddProductPage from "./pages/AddProductPage.tsx";
import { StrictMode } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add-product",
        element: <AddProductPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
