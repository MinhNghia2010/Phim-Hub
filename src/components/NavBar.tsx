import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import { Bell, Search, Menu } from "lucide-react";
import { useEffect, useState } from "react";

interface NavBarProps {
  currentPage?: string;
}

const navItems = [
  {
    name: "Home",
    href: "/home",
    key: "home"
  },
  {
    name: "Movies & Shows",
    href: "/movies-and-shows",
    key: "movies-and-shows"
  },
  {
    name: "Support",
    href: "/support",
    key: "support"
  },
  {
    name: "Subscription",
    href: "/subscription",
    key: "subscription"
  },
];

function NavBar({ currentPage }: NavBarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {window.removeEventListener("scroll", handleScroll);};
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };
  return (
    <>
    <nav className={cn("fixed left-0 z-40 flex w-full items-center justify-between nav-padding transition-all duration-200"
      , isScrolled ? "backdrop-blur-lg backdrop-brightness-50 top-0 py-6" : "bg-transparent top-7"
    )}>
      <div className="logo top-3 z-40 flex items-center gap-1">
        <img src="/Logo/PageLogo.svg" alt="Logo" />
        <span className="text-xl font-bold text-white">PhimHub</span>
      </div>


        {/* Desktop Menu */}
        <Menubar className={cn("hidden w-auto xl:flex" ,
          isScrolled ? "bg-transparent border-0" : ""
        )}>
          <MenubarMenu>
            {navItems.map((item) => (
              <MenubarTrigger
                key={item.key}
                className={cn("rounded-lg px-6 py-3 text-lg font-light", {
                  "bg-black-10 cursor-default text-white": currentPage === item.key,
                  "text-grey-75 hover:text-grey-90 hover:bg-black-8": currentPage !== item.key
                },
                  isScrolled ? { "bg-transparent underline" : currentPage === item.key, "hover:underline hover:bg-transparent": currentPage !== item.key } :
                  {}
                )}
              >
                <a
                  href={item.href}
                  className={
                    currentPage === item.key ? "pointer-events-none" : ""
                  }
                >
                  {item.name}
                </a>
              </MenubarTrigger>
            ))}
          </MenubarMenu>
        </Menubar>
        {/* Mobile Menu */}
        

      <div className="hidden top-8 right-40 z-50 xl:flex items-center gap-8">
        <Search size={25} className="text-white hover:cursor-pointer" />
        <Bell size={25} className="text-white hover:cursor-pointer" />
      </div>
      </nav>
    </>
  );
}

export default NavBar;
