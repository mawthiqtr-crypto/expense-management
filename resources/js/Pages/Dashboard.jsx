import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <SidebarLayout header="Dashboard">
            <Head title="Dashboard" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <div className="text-gray-500 text-sm">Total Expenses</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">---</div>
                </div>
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <div className="text-gray-500 text-sm">Recent Entries Count</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">---</div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Links</h3>
                <div className="flex gap-4">
                    <a href={route('expenses.create')} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                        + Add New Expense
                    </a>
                    <a href={route('expenses.index')} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                        View All Expenses
                    </a>
                </div>
            </div>
        </SidebarLayout>
    );
}
