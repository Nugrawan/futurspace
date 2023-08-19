import React from "react";
import { Button } from "./button";
import { useLocation, useNavigate } from "react-router-dom";
import { Drawer, IconButton, List, ListItem } from "@material-tailwind/react";
import { rc } from "@/lib/utils";

function NavLogo({ blue }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-2 items-center text-lg cursor-pointer animate-fade-down animate-once animate-duration-1000 animate-delay-300 animate-ease-out"
      onClick={() => navigate("/")}
    >
      <img 
        src={!blue ? "/logo-filled.svg" : "/logo-white.svg"}
        alt="logo"
        className="w-8"
      />
      <h1
        className={rc(
          "text-primary-default text-lg sm:text-2xl font-bold",
          blue && "text-white"
        )}
      >
        FUTURSPACE
      </h1>
    </div>
  );
}

const navItemList = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Offices",
    path: "/offices",
  },
  {
    name: "Spaces",
    path: "/spaces",
  },
  {
    name: "Contact us",
    path: "/contact-us",
  },
];

function NavItems({ blue }) {
  const navigate = useNavigate();
  return (
    <div className="lg:flex gap-8 items-center hidden animate-fade-down animate-once animate-duration-1000 animate-delay-300 animate-ease-out">
      {navItemList.map((item, i) => (
          <div
            key={i}
            className={rc(
              "opacity-80 hover:opacity-100 cursor-pointer",
              blue && "text-white"
            )}
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </div>
      ))}
      <Button variant={blue ? "secondary" : "default"}>Sign up</Button>
    </div>
  );
}

function DrawerWithNavigation({ pathname }) {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <>
      <IconButton
        variant="text"
        className={rc(
          "ml-auto h-8 w-8 text-inherit hover:bg-gray-300 focus:bg-transparent active:bg-transparent lg:hidden"
        )}
        ripple={false}
        onClick={openDrawer}
        data-aos="flip-down"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill={pathname === "/about" ? "white" : "black"}
          stroke={pathname === "/about" ? "white" : "black"}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </IconButton>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-5 space-x-5">
          <NavLogo />
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
          {navItemList.map((item, i) => (
            <ListItem
              className="opacity-80 hover:opacity-100 focus:font-semibold focus:opacity-100 cursor-pointer "
              key={i}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

function Navbar() {
  const pathname = useLocation().pathname;
  const blue = pathname === "/about";
  return (
    <div className={rc("w-full ", blue && "bg-primary-default")}>
      <div
        className={rc(
          "w-full flex justify-between items-center p-10 mx-auto px-6 cont"
        )}
      >
        <NavLogo blue={blue} />
        <NavItems blue={blue} />
        <DrawerWithNavigation blue={blue} pathname={pathname} />
      </div>
    </div>
  );
}

export default Navbar;
