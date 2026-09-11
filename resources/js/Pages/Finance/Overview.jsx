import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head } from '@inertiajs/react';

export default function Overview() {
    return (
        <SidebarLayout header="Finance Overview">
            <Head title="Finance Overview" />
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    Ready to build your page? you will find the page file in <code>resources/js/Pages/Finance/Overview.jsx</code>
                </div>
            </div>
        </SidebarLayout>
    );
}
