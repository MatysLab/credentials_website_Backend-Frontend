'use client';
import React, { useState } from 'react';
import ScrollToTopLink from '@/app/components/ScrollToTopLink';

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

// Data for menu items
const callsToAction = [
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];

const products = [
  { name: 'Cat or Dog', description: 'Cat vs Dog Image Classifier (TensorFlow).', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers.', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers data will be safe and secure.', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools.', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that convert.', href: '#', icon: ArrowPathIcon },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-2 animate-slide-down fixed w-full z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8" aria-label="Global">
        {/* Logo Section */}
        <div className="flex lg:flex-1">
          <a href="./" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="border border-gray-300 rounded-full h-13 w-13 object-cover transform transition-transform duration-300 hover:scale-110 hover:shadow-lg scale-x-[-1]"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-10 items-center bg-gray-100 rounded-full px-8 py-2 shadow-inner">
          <Popover.Group className="flex items-center gap-x-6">
            <a href="./" className="group flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:underline underline-offset-4 px-3 py-1 rounded-full hover:bg-gray-200 active:bg-gray-300">
              <HomeIcon className="h-5 w-5 text-gray-500 group-hover:text-blue-600" aria-hidden="true" />
              Home
            </a>

            {/* My Projects Popover */}
            <Popover className="relative">
              <Popover.Button className="group flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-blue-600 focus:outline-none transition-all duration-300 ui-open:text-blue-600 px-3 py-1 rounded-full hover:bg-gray-200 active:bg-gray-300">
                <RectangleStackIcon className="h-5 w-5 text-gray-500 group-hover:text-blue-600 ui-open:text-blue-600" aria-hidden="true" />
                My Projects
                <ChevronDownIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 ui-open:rotate-180" aria-hidden="true" />
              </Popover.Button>

              <Popover.Panel className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5 animate-fade-in-scale">
                <div className="p-4">
                  {products.map((item) => (
                    <div key={item.name} className="group relative flex items-center gap-4 rounded-lg p-3 hover:bg-gray-50">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white group-hover:shadow-md">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900 text-sm hover:text-blue-600">
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
                      className="flex items-center justify-center gap-2.5 p-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    >
                      <item.icon className="h-5 w-5 text-gray-500 hover:text-blue-600" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Popover>

            {/* About Me Link */}
            <a href="#" className="group flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 px-3 py-1 rounded-full hover:bg-gray-200 active:bg-gray-300">
              <IdentificationIcon className="h-5 w-5 text-gray-500 group-hover:text-blue-600" aria-hidden="true" />
              About Me
            </a>
          </Popover.Group>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform hover:scale-105 active:scale-100 scroll-smooth"
          >
            Contact Me <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 bg-black/20" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="./" className="-m-1.5 p-1.5 flex items-center gap-2">
              <img
                className="h-8 w-8 rounded-full border border-gray-300"
                src="/logo.png"
                alt="Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                <a href="./" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-100">
                  Home
                </a>
                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-100">
                  My Projects
                </a>
                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-100">
                  About Me
                </a>
                <a href="#contact" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-blue-600 hover:bg-blue-50 scroll-smooth">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
