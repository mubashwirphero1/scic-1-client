import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const location = useLocation();
    const { user, logOut, signInWithGoogle } = useAuth()
    const navigation = [
        { name: 'Home', href: '/home', current: location.pathname == "/home" || "/" ? true : false },
        { name: 'Products', href: '/products', current: location.pathname == "/products" ? true : false },
        { name: 'Contact', href: '/contact', current: location.pathname == "/contact" ? true : false },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            {/* Top navigation  */}
            <div className="bg-blue-400 py-5 px-4 md:flex items-center justify-between">
                <p className='text-base text-white text-medium'>স্বপ্ন রং by তানজিনা</p>
                <div className="flex items-center gap-4">
                    <a href="https://www.facebook.com/%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%AA%E0%A7%8D%E0%A6%A8-%E0%A6%B0%E0%A6%99-by-%E0%A6%A4%E0%A6%BE%E0%A6%A8%E0%A6%9C%E0%A6%BF%E0%A6%A8%E0%A6%BE-107314198125371" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className='text-white text-lg hover:cursor-pointer' /></a>
                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D8801903354065%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR2XRJGVHVquo5_aXV6ucEBD81HgDYVAlc-r-dt-9fqZiFGYVumUN7BizI4&h=AT0jAYWmBJJSJ0LemdE1c_kKZv8HKTt1Qs5t-Ql1fTo2_3t3_lbOEAULKWiQq7dIOHM_Dy3P8dANMAggFwP4tIEwvb3YqCEtjBSDdz6gpZ65BV-syAkamuqYelMKR-T-wD23cuJYZyGTt2TkRw" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className='text-white text-lg hover:cursor-pointer' /></a>
                </div>
            </div>


            {/* Main navigation */}
            <Disclosure as="nav" className="bg-white">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">

                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className={classNames(
                                                        'text-gray-500 border-b-2 border-b-transparent hover:border-b-lime-500',
                                                        'px-3 py-2 lg:text-md font-bold '
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    {/* Profile dropdown */}
                                    {
                                        user?.email ? <Menu as="div" className="ml-3 relative">
                                            <div>
                                                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-gray-100">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src={user.photoURL}
                                                        alt="user photo"
                                                    />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/cart"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Cart
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={logOut}
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Sign out
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu> : <div className="flex gap-4 items-center">
                                            <button onClick={signInWithGoogle} className="px-4 py-2 bg-blue-400 font-light text-zinc-50 rounded-md">Sign In With GOOGLE</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 shadow-xl">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-blue-500 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
};

export default Navigation;