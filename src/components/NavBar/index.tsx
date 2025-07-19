import AddProductButton from "../AddProductButton";
import ThemeToggleButton from "../ThemeToggleButton";
import { Link } from "react-router-dom";
import { FlipWords } from "../ui/FlipWords";

export default function NavBar() {
  const logoWords = ["Products", "Panel"];

  return (
    <header className="relative border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-primary hover:text-primary/90">
              <FlipWords
                words={logoWords}
                className="text-2xl font-bold text-[#d97757] md:text-4xl dark:text-[#d97757]"
              />
            </Link>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link to={"/add-product"}>
            <AddProductButton />
          </Link>

          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
}
