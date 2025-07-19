import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="container mx-auto flex min-h-screen flex-col">
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main className="mt-10 flex flex-1 flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
