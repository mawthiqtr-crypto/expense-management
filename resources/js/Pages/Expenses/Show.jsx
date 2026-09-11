import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ expense }) {
    const data = expense.data;

    return (
        <SidebarLayout header="Expense Details">
            <Head title={`Expense #${data.id}`} />

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">View Expense</h2>
                <Link href={route('expenses.index')} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                    Back to List
                </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Amount</dt>
                        <dd className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">${data.amount}</dd>
                    </div>

                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Date</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">{data.date}</dd>
                    </div>

                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Category</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">{data.category?.name || 'N/A'}</dd>
                    </div>

                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Recorded By</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">{data.recorded_by?.name || 'System'}</dd>
                    </div>

                    <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Description</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">{data.description}</dd>
                    </div>
                </dl>
            </div>
        </SidebarLayout>
    );
}
