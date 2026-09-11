import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Create({ categories }) {
    const { data, setData, post, processing, errors } = useForm({
        amount: '',
        description: '',
        date: new Date().toISOString().split('T')[0],
        category_id: '',
        related_party: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('expenses.store'));
    };

    return (
        <SidebarLayout header="Create Expense">
            <Head title="Create Expense" />

            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <InputLabel htmlFor="amount" value="Amount" />
                        <TextInput
                            id="amount"
                            type="number"
                            step="0.01"
                            name="amount"
                            value={data.amount}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('amount', e.target.value)}
                            required
                        />
                        <InputError message={errors.amount} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="description" value="Description" />
                        <TextInput
                            id="description"
                            type="text"
                            name="description"
                            value={data.description}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('description', e.target.value)}
                            required
                        />
                        <InputError message={errors.description} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="date" value="Date" />
                        <TextInput
                            id="date"
                            type="date"
                            name="date"
                            value={data.date}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('date', e.target.value)}
                            required
                        />
                        <InputError message={errors.date} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="category_id" value="Category" />
                        <select
                            id="category_id"
                            name="category_id"
                            value={data.category_id}
                            onChange={(e) => setData('category_id', e.target.value)}
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            required
                        >
                            <option value="">Select a category</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                        <InputError message={errors.category_id} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="related_party" value="الجهة / الشخص المرتبط (اختياري)" />
                        <TextInput
                            id="related_party"
                            type="text"
                            name="related_party"
                            value={data.related_party}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('related_party', e.target.value)}
                            placeholder="مثال: محمد محمود، حساب بنك القاهرة..."
                        />
                        <InputError message={errors.related_party} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end gap-4">
                        <Link href={route('expenses.index')} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            Cancel
                        </Link>
                        <PrimaryButton disabled={processing}>
                            Save Expense
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </SidebarLayout>
    );
}
