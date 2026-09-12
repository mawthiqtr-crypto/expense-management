import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';

export default function Create({ categories, employees = [], relatedParties = [] }) {
    const { data, setData, post, processing, errors } = useForm({
        amount: '',
        description: '',
        date: new Date().toISOString().split('T')[0],
        category_id: '',
        recorded_by: '',
        related_party_id: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('expenses.store'));
    };

    const hasErrors = Object.keys(errors || {}).length > 0;

    return (
        <SidebarLayout header="إضافة مصروف جديد">
            <Head title="إضافة مصروف جديد" />

            <div className="mx-auto max-w-5xl">
                <div className="mb-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                        <span>المصروفات</span>
                        <span className="text-gray-400">/</span>
                        <span>إضافة مصروف</span>
                    </div>
                    <Link href={route('expenses.index')} className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        العودة إلى القائمة
                    </Link>
                </div>

                <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm dark:bg-gray-800">
                    <div className="mb-6 text-center">
                        <h1 className="text-3xl font-bold text-[#1f2937] dark:text-white">إضافة مصروف جديد</h1>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            يرجى التحقق من تفاصيل المصروف قبل حفظه.
                        </p>
                    </div>

                    {hasErrors && (
                        <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-200 text-red-700">!</span>
                            <span>يرجى تصحيح الحقول المميزة باللون الأحمر قبل الحفظ.</span>
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <InputLabel htmlFor="date" value="التاريخ *" className="mb-2" />
                                <TextInput
                                    id="date"
                                    type="date"
                                    name="date"
                                    value={data.date}
                                    onChange={(e) => setData('date', e.target.value)}
                                    className={`mt-1 block w-full rounded-lg border px-3 py-3 ${errors.date ? 'border-red-300 bg-red-50 text-red-700 focus:border-red-500 focus:ring-red-500' : 'border-[#d1d5db] bg-white text-gray-700 focus:border-[#0f5b4c] focus:ring-[#0f5b4c]'}`}
                                />
                                <InputError message={errors.date} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="amount" value="المبلغ *" className="mb-2" />
                                <TextInput
                                    id="amount"
                                    type="number"
                                    step="0.01"
                                    min="0.01"
                                    name="amount"
                                    value={data.amount}
                                    onChange={(e) => setData('amount', e.target.value)}
                                    className={`mt-1 block w-full rounded-lg border px-3 py-3 ${errors.amount ? 'border-red-300 bg-red-50 text-red-700 focus:border-red-500 focus:ring-red-500' : 'border-[#d1d5db] bg-white text-gray-700 focus:border-[#0f5b4c] focus:ring-[#0f5b4c]'}`}
                                    placeholder="0.00"
                                />
                                <InputError message={errors.amount} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="category_id" value="التصنيف *" className="mb-2" />
                                <select
                                    id="category_id"
                                    name="category_id"
                                    value={data.category_id}
                                    onChange={(e) => setData('category_id', e.target.value)}
                                    className={`mt-1 block w-full rounded-lg border px-3 py-3 ${errors.category_id ? 'border-red-300 bg-red-50 text-red-700 focus:border-red-500 focus:ring-red-500' : 'border-[#d1d5db] bg-white text-gray-700 focus:border-[#0f5b4c] focus:ring-[#0f5b4c]'}`}
                                >
                                    <option value="">اختر التصنيف</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                                <InputError message={errors.category_id} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="recorded_by" value="المصروف من قبل *" className="mb-2" />
                                <select
                                    id="recorded_by"
                                    name="recorded_by"
                                    value={data.recorded_by}
                                    onChange={(e) => setData('recorded_by', e.target.value)}
                                    className={`mt-1 block w-full rounded-lg border px-3 py-3 ${errors.recorded_by ? 'border-red-300 bg-red-50 text-red-700 focus:border-red-500 focus:ring-red-500' : 'border-[#d1d5db] bg-white text-gray-700 focus:border-[#0f5b4c] focus:ring-[#0f5b4c]'}`}
                                >
                                    <option value="">اختر الموظف</option>
                                    {employees.map((employee) => (
                                        <option key={employee.id} value={employee.id}>{employee.name}</option>
                                    ))}
                                </select>
                                <InputError message={errors.recorded_by} className="mt-2" />
                            </div>

                            <div className="md:col-span-2">
                                <InputLabel htmlFor="description" value="الوصف *" className="mb-2" />
                                <textarea
                                    id="description"
                                    name="description"
                                    rows="4"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    className={`mt-1 block w-full rounded-lg border px-3 py-3 resize-none ${errors.description ? 'border-red-300 bg-red-50 text-red-700 focus:border-red-500 focus:ring-red-500' : 'border-[#d1d5db] bg-white text-gray-700 focus:border-[#0f5b4c] focus:ring-[#0f5b4c]'}`}
                                    placeholder="اكتب وصفاً واضحاً للمصروف..."
                                />
                                <InputError message={errors.description} className="mt-2" />
                            </div>

                            <div className="md:col-span-2">
                                <InputLabel htmlFor="related_party_id" value="الجهة / الشخص المرتبط (اختياري)" className="mb-2" />
                                <select
                                    id="related_party_id"
                                    name="related_party_id"
                                    value={data.related_party_id}
                                    onChange={(e) => setData('related_party_id', e.target.value)}
                                    className={`mt-1 block w-full rounded-lg border px-3 py-3 ${errors.related_party_id ? 'border-red-300 bg-red-50 text-red-700 focus:border-red-500 focus:ring-red-500' : 'border-[#d1d5db] bg-white text-gray-700 focus:border-[#0f5b4c] focus:ring-[#0f5b4c]'}`}
                                >
                                    <option value="">اختر الشخص / الجهة</option>
                                    {relatedParties.map((party) => (
                                        <option key={party.id} value={party.id}>{party.name}</option>
                                    ))}
                                </select>
                                <InputError message={errors.related_party_id} className="mt-2" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-medium text-[#1f2937] dark:text-gray-200">ملاحظة:</span> سيتم حفظ المصروف بعد التحقق من الحقول المطلوبة.
                            </div>

                            <div className="flex items-center justify-end gap-3">
                                <Link href={route('expenses.index')}>
                                    <SecondaryButton type="button">إلغاء</SecondaryButton>
                                </Link>
                                <PrimaryButton type="submit" disabled={processing}>
                                    {processing ? 'جاري الحفظ...' : 'حفظ المصروف'}
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </SidebarLayout>
    );
}
