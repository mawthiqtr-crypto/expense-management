import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';

export default function SidebarLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeGroup, setActiveGroup] = useState('');

    const toggleGroup = (groupName) => {
        setActiveGroup(activeGroup === groupName ? '' : groupName);
    };

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex h-16 items-center justify-center border-b border-gray-200 dark:border-gray-700 px-4">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white">
                        <ApplicationLogo className="h-8 w-auto fill-current" />
                        <span>Expense App</span>
                    </Link>
                </div>

                <nav className="mt-4 px-4 space-y-2">
                    <div>
                        <button 
                            onClick={() => toggleGroup('main')}
                            className="w-full flex items-center justify-between py-2 px-3 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <span>Main Menu</span>
                            <svg className={`h-4 w-4 transition-transform ${activeGroup === 'main' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        <div className={`mt-1 space-y-1 pl-4 ${activeGroup === 'main' || activeGroup === '' ? 'block' : 'hidden'}`}>
                            <Link
                                href={route('dashboard')}
                                className={`block py-2 px-3 text-sm rounded-md ${route().current('dashboard') ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                            >
                                Dashboard
                            </Link>
                            <Link
                                href={route('expenses.index')}
                                className={`block py-2 px-3 text-sm rounded-md ${route().current('expenses.*') ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                            >
                                Expenses
                            </Link>
                        </div>
                    </div>
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Bar */}
                <header className="flex h-16 items-center justify-between bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setSidebarOpen(true)}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        
                        {/* Breadcrumb / Page Title */}
                        <div className="hidden sm:block text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {header}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Language Switcher Placeholder */}
                        <button className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                            EN / AR
                        </button>

                        {/* User Menu */}
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none">
                                    {user.name}
                                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">Log Out</Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </header>

                {/* Mobile Header (if Breadcrumb is hidden on mobile) */}
                <div className="sm:hidden px-4 py-3 bg-white dark:bg-gray-800 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{header}</h2>
                </div>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-4 sm:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
