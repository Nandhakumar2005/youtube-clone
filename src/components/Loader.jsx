import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <div className="flex justify-center items-center h-[50vh] w-full">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
        <p className="text-muted-foreground font-medium animate-pulse">Loading...</p>
      </div>
    </div>
  );
}

export default Loader;
