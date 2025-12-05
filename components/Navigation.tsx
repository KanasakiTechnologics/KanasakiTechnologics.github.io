'use client'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog, DialogPanel, PopoverGroup} from "@headlessui/react";
import {useState} from "react";
import {Contact, House, LayoutDashboard, UserRoundPen} from "lucide-react";

export default function navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div>
            <nav aria-label="Global" className="mx-auto flex w-screen items-center justify-between p-6 lg:px-8 fixed ">
                <div className="flex lg:flex-1">
                    <a href="#home" className="-m-1.5 p-1.5">
                        <span className="sr-only font-semibold">Kanasaki Technologics</span>
                        <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=amber&shade=50"
                            className="h-8 w-auto transition duration-300 group-hover:brightness-0"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12 pr-5">
                    <a href="#home" className="text-sm/6 font-semibold text-white hover:text-amber-600 gap-1.5 flex">
                        <House />
                        Home
                    </a>
                    <a href="#aboutus" className="text-sm/6 font-semibold text-white hover:text-amber-600 gap-1.5 flex">
                        <UserRoundPen />
                        About Us
                    </a>
                    <a href="#contact" className="text-sm/6 font-semibold text-white hover:text-amber-600 gap-1.5 flex">
                        <Contact />
                        Contact Us
                    </a>
                    <a href="/MediaPage" className="text-sm/6 font-semibold text-white hover:text-amber-600 gap-1.5 flex">
                        <LayoutDashboard />
                        Dashboard
                    </a>
                </PopoverGroup>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#home"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 hover:text-amber-600 gap-1.5 flex"
                                >
                                    <House/>
                                    Home
                                </a>
                                <a
                                    href="#aboutus"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 hover:text-amber-600 gap-1.5 flex"
                                >
                                    <UserRoundPen/>
                                    About Us
                                </a>
                                <a
                                    href="#contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 hover:text-amber-600 gap-1.5 flex"
                                >
                                    <Contact />
                                    Contact Us
                                </a>
                                <a
                                    href="/MediaPage"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 hover:text-amber-600 gap-1.5 flex"
                                >
                                    <LayoutDashboard />
                                    Dashboard
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </div>
    );
}
