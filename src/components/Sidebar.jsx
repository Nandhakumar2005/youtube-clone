import { motion } from "framer-motion";
import { categories } from "../utils/categories";
import { cn } from "@/utils/cn";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <aside className="w-full md:w-[240px] md:min-h-screen bg-background/50 backdrop-blur-sm border-r border-border/40 p-3 flex md:flex-col overflow-y-auto hidden-scrollbar gap-2 z-10 sticky top-16">
      {categories.map((category) => {
        const isActive = selectedCategory === category.name;

        return (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={cn(
              "relative px-4 py-3 rounded-xl flex items-center gap-3 transition-colors text-left flex-shrink-0 md:flex-shrink",
              "hover:bg-secondary/80 focus:outline-none",
              isActive ? "text-primary-foreground" : "text-foreground"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="sidebar-active-indicator"
                className="absolute inset-0 bg-primary rounded-xl -z-10 shadow-md shadow-primary/20"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            
            {category.icon && (
              <category.icon
                className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-primary-foreground" : "text-primary"
                )}
              />
            )}
            <span className="font-medium whitespace-nowrap">{category.name}</span>
          </button>
        );
      })}
    </aside>
  );
}

export default Sidebar;