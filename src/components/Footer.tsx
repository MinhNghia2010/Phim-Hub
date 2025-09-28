import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
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
    }
]

function Footer() {

    return (
        <div className="mt-20 bg-black-6 pt-12 pb-6 xl:pt-20 xl:pb-10 2xl:pt-25 2xl:pb-12">
            <div className="grid grid-cols-2 gap-8 md:gap-6 2xl:gap-8 md:grid-cols-3 lg:grid-cols-6 containerBox">
                {context.map((section, index) => (
                    <div key={index} className="space-y-4">
                        <h3 className="text-white font-semibold sm:text-lg 2xl:text-xl">
                            {section.header}
                        </h3>
                        <ul className="space-y-2">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <button
                                        // onClick={() => handleLinkClick(section.header, link)}
                                        className="text-grey-60 hover:text-white transition-colors duration-200 text-left text-sm sm:text-base 2xl:text-lg"
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
            <div className="containerBox border-t border-black-15 mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
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