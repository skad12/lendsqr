
import {React, useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import Mobilenav from "./Mobilenav";

function SideNavbar() {

  const [menuOn, setMenuOn] = useState(false)

  const menu = <Mobilenav className="" />

  return (
    <>
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
            onClick={() => setMenuOn(!menuOn)}
          />
        </Disclosure.Button>
        {menuOn && menu }
      </Disclosure>
    </div>
    </>
  );
}

export default SideNavbar;