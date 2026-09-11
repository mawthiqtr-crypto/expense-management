import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head } from '@inertiajs/react';

export default function Accounts() {
    return (
        <SidebarLayout header="Accounts">
            <Head title="Accounts" />
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    Ready to build your page? you will find the page file in <code>resources/js/Pages/Finance/Accounts.jsx</code>
                </div>
            </div>
        </SidebarLayout>
    );
}
