import { ShoppingCart, User, ChevronDown, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  return (
    <nav className="bg-nav border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-10 h-10 text-primary" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">AGARWAL BROTHERS</span>
              <span className="text-xs text-muted-foreground">EDUCATIONS</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Classes <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover z-50">
                <DropdownMenuItem>CA Final</DropdownMenuItem>
                <DropdownMenuItem>CA Inter</DropdownMenuItem>
                <DropdownMenuItem>CMA Final</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Test Series <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover z-50">
                <DropdownMenuItem>CA Final Test Series</DropdownMenuItem>
                <DropdownMenuItem>CA Inter Test Series</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Books <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover z-50">
                <DropdownMenuItem>CA Final Books</DropdownMenuItem>
                <DropdownMenuItem>CA Inter Books</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="/resources" className="text-foreground hover:text-primary transition-colors">
              Free Resources
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
