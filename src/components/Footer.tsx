import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

const context = [
  {
    header: "Home",
    links: ["Categories", "Devices", "FAQ's", "Pricing"],
  },
  {
    header: "Movies",
    links: ["Genres", "Trending", "New Releases", "Popular"],
  },
  {
    header: "Shows",
    links: ["Genres", "Trending", "New Releases", "Popular"],
  },
  {
    header: "Support",
    links: ["Contact Us"],
  },
  {
    header: "Subscription",
    links: ["Plans", "Features"],
  },
  {
    header: "Connect with Us",
    links: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
  },
];

function Footer() {
  const getNavbarHeight = () => {
    const testElement = document.createElement("div");
    testElement.className = "offcanvas-top-padding";
    testElement.style.visibility = "hidden";
    document.body.appendChild(testElement);
    const height = parseInt(window.getComputedStyle(testElement).paddingTop);
    document.body.removeChild(testElement);
    return height;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = getNavbarHeight();
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (header: string, link: string) => {
    if (header === "Home") {
      // Navigate to home page and scroll to section
      const sectionMap: { [key: string]: string } = {
        Categories: "categories-section",
        Devices: "devices-section",
        Pricing: "pricing-section",
        "FAQ's": "faq-section",
      };

      const sectionId = sectionMap[link];
      if (sectionId) {
        // If already on home page, scroll to section
        if (
          window.location.pathname === "/" ||
          window.location.pathname === "/home"
        ) {
          scrollToSection(sectionId);
        } else {
          // Navigate to home page with hash
          window.location.href = `/#${sectionId}`;
        }
      }
    } else if (header === "Movies" || header === "Shows") {
      // Navigate to movies page
      window.location.href = "/movies-and-shows";
    } else if (header === "Support") {
      window.location.href = "/support";
    } else if (header === "Subscription") {
      window.location.href = "/subscription";
    }
  };

  return (
    <div className="bg-black-6 mt-20 pt-12 pb-6 xl:pt-20 xl:pb-10 2xl:pt-25 2xl:pb-12">
      <div className="containerBox grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-6 lg:grid-cols-6 2xl:gap-8">
        {context.map((section, index) => (
          <div key={index} className="space-y-4">
            <h3 className="font-semibold text-white sm:text-lg 2xl:text-xl">
              {section.header}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <button
                    onClick={() => handleLinkClick(section.header, link)}
                    className="text-grey-60 text-left text-sm transition-colors duration-200 hover:text-white sm:text-base 2xl:text-lg"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="containerBox border-black-15 mt-12 flex flex-col items-start justify-between gap-5 border-t pt-8 md:flex-row md:items-center">
        <p className="text-grey-60 text-sm sm:text-base 2xl:text-lg">
          © 2025 PhimHub. All rights reserved.
        </p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href="#">Home</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href="#">Components</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href="#">Components</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
export default Footer;
