'use client'
import React from 'react';

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
} from '@headlessui/react';

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  IdentificationIcon,
  RectangleStackIcon,
  HomeIcon,
  ChevronDownIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const callsToAction = [
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic.', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers.', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure.', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools.', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that convert.', href: '#', icon: ArrowPathIcon },
];

const Header = () => {
  return (
    <header className="bg-white shadow-md py-3">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="./" className="-m-1.5 p-1.5 flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="border border-gray-300 rounded-full h-9 w-9 object-cover scale-x-[-1]"
            width={36}
            height={36}
          />
        </a>
      </div>


        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-10 items-center bg-gray-100 rounded-full px-8 py-2 shadow-inner">
          <Popover.Group className="flex items-center gap-x-6">
            <a href="#" className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
              <HomeIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
              Home
            </a>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-blue-600 focus:outline-none transition-colors">
                <RectangleStackIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                My Projects
                <ChevronDownIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-transform duration-200 ui-open:rotate-180" aria-hidden="true" />
              </Popover.Button>

              <Popover.Panel className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5 animate-fade-in-up">
                <div className="p-4">
                  {products.map((item) => (
                    <div key={item.name} className="group relative flex items-center gap-4 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white transition-colors">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900 text-sm">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600 text-xs leading-tight">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 divide-y divide-gray-200 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-2.5 p-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <item.icon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Popover>

            <a href="#" className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
              <IdentificationIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
              About Me
            </a>
          </Popover.Group>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Contact Me <span className="ml-2" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
