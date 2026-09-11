import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ expenses }) {
    return (
        <SidebarLayout header="Expenses">
            <Head title="Expenses" />

            {/* Page Header Area -> Search/Filters -> Data Table */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Expense List</h2>
                <Link href={route('expenses.create')} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                    + New Expense
                </Link>
            </div>

            {/* Placeholder for Search/Filters */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-4">
                <div className="text-sm text-gray-500">Search and filters will be implemented in future sprints.</div>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {expenses.data.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No expenses found.</td>
                            </tr>
                        ) : (
                            expenses.data.map((expense) => (
                                <tr key={expense.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{expense.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{expense.description}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.category?.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">${expense.amount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Link href={route('expenses.show', expense.id)} className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </SidebarLayout>
    );
}
