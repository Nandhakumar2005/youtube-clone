import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { cn } from "@/utils/cn";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex items-center w-full max-w-md",
        "relative rounded-full overflow-hidden",
        "bg-secondary/50 backdrop-blur-md border border-border/50",
        "focus-within:ring-2 focus-within:ring-primary/50 transition-all duration-300"
      )}
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-transparent px-6 py-2 outline-none text-foreground placeholder:text-muted-foreground"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-secondary/80 hover:bg-secondary transition-colors border-l border-border/50 h-full flex items-center justify-center"
      >
        <Search className="w-5 h-5 text-muted-foreground" />
      </button>
    </form>
  );
}

export default SearchBar;