import { Link } from "react-router-dom";
import { MonitorPlay } from "lucide-react";
import SearchBar from "./Searchbar";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/80 border-b border-border/40 shadow-sm supports-[backdrop-filter]:bg-background/60 transition-colors">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-red-600 rounded-xl group-hover:scale-105 group-active:scale-95 transition-transform">
            <MonitorPlay className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            YouTube
          </span>
        </Link>
        
        <div className="flex-1 max-w-2xl px-4 flex justify-end md:justify-center">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Navbar;