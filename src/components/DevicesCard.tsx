import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MonitorPlay,
  Smartphone,
  Tablet,
  Laptop,
  Gamepad2,
  RectangleGoggles,
} from "lucide-react";

interface DevicesCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const devices: DevicesCardProps[] = [
  {
    icon: <Smartphone size={28} />,
    title: "Smartphone",
    description:
      "PhimHub is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: <Tablet size={28} />,
    title: "Tablet",
    description:
      "PhimHub is optimized for tablets, providing a seamless streaming experience on larger screens.",
  },
  {
    icon: <MonitorPlay size={28} />,
    title: "Desktop",
    description:
      "PhimHub is optimized for desktop, delivering the best streaming experience on larger displays.",
  },
  {
    icon: <Laptop size={28} />,
    title: "Laptop",
    description:
      "PhimHub is compatible with a wide range of laptops, allowing you to enjoy your favorite content on the big screen.",
  },
  {
    icon: <Gamepad2 size={28} />,
    title: "Gaming Console",
    description:
      "PhimHub is compatible with a wide range of gaming consoles, providing an immersive streaming experience.",
  },
  {
    icon: <RectangleGoggles size={28} />,
    title: "VR Headsets",
    description:
      "PhimHub works seamlessly with popular VR headsets, providing an immersive streaming experience.",
  },
];

function DevicesCard() {
  return (
    <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 xl:grid-cols-3">
      {devices.map((device, index) => (
        <Card
          key={index}
          className="bg-gradient-red border-black-10 p-6 transition-transform duration-300 hover:scale-[1.02] sm:p-10 xl:p-12"
        >
          <CardHeader className="flex items-center gap-4 px-0 pb-5 sm:pb-6 xl:pb-8">
            <div className="icon bg-black-8 border-black-12 text-red-45 flex h-12 w-12 items-center justify-center rounded-lg border-2 p-3">
              {device.icon}
            </div>
            <CardTitle className="text-lg text-white sm:text-xl xl:text-2xl">
              {device.title}
            </CardTitle>
          </CardHeader>
          <CardDescription className="text-grey-60 text-sm sm:text-base xl:text-lg">
            {device.description}
          </CardDescription>
        </Card>
      ))}
    </div>
  );
}

export default DevicesCard;
