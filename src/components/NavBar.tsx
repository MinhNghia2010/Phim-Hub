import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import { Bell, Search, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavBarProps {
  currentPage?: string;
}

const navItems = [
  {
    name: "Home",
    href: "/home",
    key: "home",
  },
  {
    name: "Movies & Shows",
    href: "/movies-and-shows",
    key: "movies-and-shows",
  },
  {
    name: "Support",
    href: "/support",
    key: "support",
  },
  {
    name: "Subscription",
    href: "/subscription",
    key: "subscription",
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <nav
        className={cn(
          "nav-padding fixed left-0 z-40 flex w-full items-center justify-between transition-all duration-200",
          isScrolled
            ? "top-0 py-3 backdrop-blur-lg backdrop-brightness-50 md:p-4 xl:p-6"
            : "top-7 bg-transparent",
        )}
      >
        <div className="logo top-3 z-40 flex items-center gap-1">
          <img src="/Logo/PageLogo.svg" alt="Logo" className="pageLogo-width" />
          <span className="text-sm font-bold text-white md:text-base xl:text-lg">
            PhimHub
          </span>
        </div>

        {/* Desktop Menu */}
        <Menubar
          className={cn(
            "hidden w-auto xl:flex",
            isScrolled ? "border-0 bg-transparent" : "",
          )}
        >
          <MenubarMenu>
            {navItems.map((item) => (
              <MenubarTrigger
                key={item.key}
                className={cn(
                  "rounded-lg px-6 py-3 text-sm font-light md:text-base xl:text-lg",
                  {
                    "bg-black-10 cursor-default text-white":
                      currentPage === item.key,
                    "text-grey-75 hover:text-grey-90 hover:bg-black-8":
                      currentPage !== item.key,
                  },
                  isScrolled
                    ? {
                        "bg-transparent underline": currentPage === item.key,
                        "hover:bg-transparent hover:underline":
                          currentPage !== item.key,
                      }
                    : {},
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
        <div className="z-50 xl:hidden">
          <button
            className={cn(
              "p-2 z-50 relative",
              isScrolled
                ? ""
                : "bg-black-8 border-black-12 rounded-lg border-2",
            )}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? 
              <X
                size={20}
                className="text-white"
              />
             : 
              <Menu
                size={20}
                className="text-white"
              />
            }
          </button>
          {/* Nav overlay */}
          <div className={cn("fixed top-0 left-0 w-full h-[calc(100vh)] bg-black/80 z-40 flex flex-col items-center justify-center xl:hidden transition-all duration-300",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              )}
            >
            <div className="flex h-full flex-col items-center justify-center space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={handleNavClick}
                  className={cn(
                    "text-sm font-light text-white",
                    currentPage === item.key
                      ? "pointer-events-none underline"
                      : "hover:underline",
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Right icons */}


        <div className="top-8 right-40 z-50 hidden items-center gap-8 xl:flex">
          <Search size={25} className="text-white hover:cursor-pointer" />
          <Bell size={25} className="text-white hover:cursor-pointer" />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
