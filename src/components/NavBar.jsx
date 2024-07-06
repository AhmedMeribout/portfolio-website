import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import EncryptButton from "./EncryptButton";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdPersonOutline, MdOutlineDocumentScanner,MdOutlineAlternateEmail } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { FaLinkedinIn ,FaGithub,FaHome } from "react-icons/fa";

const navigation = [
  { name: "Home", icon: FaHome,  path: "/home" },
  { name: "Projects", icon: AiOutlineFundProjectionScreen, path: "/projects" },
  { name: "About", icon: MdPersonOutline, path: "/about" },
  { name: "Resume", icon: MdOutlineDocumentScanner, path: "/resume" },
  { name: "Contact", icon: MdOutlineAlternateEmail, path: "/contact" },
  { name: "Blog", icon: LuPencil, path: "/blog" },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800 fixed overflow-hidden top-0 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center"></div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
              {navigation.map((button, index) => (
                <EncryptButton 
                    key={index} 
                    TARGET_TEXT={button.name} 
                    icon={button.icon} 
                    path={button.path}
                />
            ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-7">
          <a href="https://www.linkedin.com/in/ahmed-meribout-393281236/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-white text-3xl transition duration-300 ease-in-out hover:text-green-300" />
            </a>
            <a href="https://github.com/AhmedMeribout" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-3xl transition duration-300 ease-in-out hover:text-green-300" />
            </a>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item,index) => (
            <DisclosureButton
              key={index}
              as="a"
              href={item.path}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
