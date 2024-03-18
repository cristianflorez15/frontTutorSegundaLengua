import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse ,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { useRouter } from 'next/navigation';
 
export default function Header(params) {
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className="h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-2">
        <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
            onClick={()=>router.push("/")}
            >
            Tutor
            </Typography>
            <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1">
                <Button
                variant="gradient"
                color="blue-gray"
                size="sm"
                className="hidden lg:inline-block"
                onClick={()=>router.push("/registrarme")}
                >
                <span>Regitrarse</span>
                </Button>
                <Button
                variant="gradient"
                color="red"
                size="sm"
                className="hidden lg:inline-block"
                onClick={()=>router.push("/login")}
                >
                <span>Ingresar</span>
                </Button>
            </div>
            <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
            >
                {openNav ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                )}
            </IconButton>
            </div>
        </div>
        <Collapse  open={openNav}>
            <div className="flex items-center gap-x-1">
            <Button fullWidth variant="gradient" color="blue-gray" size="sm"  onClick={()=>router.push("/registrarme")}>
                <span>Registrarme</span>
            </Button>
            <Button fullWidth variant="gradient" color="red" size="sm"  onClick={()=>router.push("/login")}>
                <span>Ingresar</span>
            </Button>
            </div>
        </Collapse >
    </Navbar>
  );
}