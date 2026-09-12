import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import { FaDownload, FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa';

const quickActions = {
    add: { label: 'إضافة', icon: FaPlus, title: 'إضافة مصروف جديد' },
    edit: { label: 'تعديل', icon: FaEdit, title: 'تعديل المصروف' },
    delete: { label: 'حذف', icon: FaTrashAlt, title: 'حذف المصروف' },
    export: { label: 'تصدير', icon: FaDownload, title: 'تصدير البيانات' },
};

export default function ComponentsGallery() {
    return (
        <SidebarLayout header="UI Components Gallery">
            <Head title="Components Gallery" />

            <div className="space-y-8">
                <section className="rounded-xl border border-[#e5e7eb] bg-[#f7f7f7] p-6 shadow-sm">
                    <div className="mb-6 flex items-center justify-between gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <span>إدارة المصروفات</span>
                            <span>›</span>
                            <span className="text-gray-400">إضافة مصروف</span>
                        </div>
                        <div className="text-gray-500">العودة إلى القائمة</div>
                    </div>

                    <div className="mb-6 text-center">
                        <h2 className="text-3xl font-bold text-[#1f2937]">إضافة مصروف جديد</h2>
                        <p className="mt-2 text-sm text-[#4b5563]">
                            يرجى التحقق من تفاصيل المصروف قبل حفظه.
                        </p>
                    </div>

                    <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                        <div className="mb-6 grid gap-6 md:grid-cols-2">
                            <div>
                                <InputLabel htmlFor="date" value="التاريخ *" className="mb-2" />
                                <TextInput
                                    id="date"
                                    type="text"
                                    value="11/18/2025"
                                    className="mt-1 block w-full rounded-lg border-[#d1d5db] bg-white px-3 py-3 text-gray-700 focus:border-[#0f5b4c] focus:ring-[#0f5b4c]"
                                />
                                <p className="mt-2 text-xs text-gray-500">تاريخ المعاملة.</p>
                            </div>

                            <div>
                                <InputLabel htmlFor="amount" value="المبلغ *" className="mb-2" />
                                <TextInput
                                    id="amount"
                                    type="text"
                                    value="750.00"
                                    className="mt-1 block w-full rounded-lg border-[#d1d5db] bg-white px-3 py-3 text-gray-700 focus:border-[#0f5b4c] focus:ring-[#0f5b4c]"
                                />
                                <p className="mt-2 text-xs text-gray-500">القيمة المدفوعه.</p>
                            </div>

                            <div>
                                <InputLabel htmlFor="category" value="الفئة *" className="mb-2" />
                                <select
                                    id="category"
                                    className="mt-1 block w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-3 text-gray-700 shadow-sm focus:border-[#0f5b4c] focus:ring-[#0f5b4c]"
                                    defaultValue=""
                                >
                                    <option value="">اختر الفئة</option>
                                    <option>أدوات مكتبية</option>
                                    <option>مشتريات</option>
                                </select>
                                <p className="mt-2 text-xs text-gray-500">تحديد الفئة المناسبة.</p>
                            </div>

                            <div>
                                <InputLabel htmlFor="spent_by" value="المصروف من قبل *" className="mb-2" />
                                <select
                                    id="spent_by"
                                    className="mt-1 block w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-3 text-gray-700 shadow-sm focus:border-[#0f5b4c] focus:ring-[#0f5b4c]"
                                    defaultValue=""
                                >
                                    <option value="">اختر الموظف</option>
                                    <option>مهندسة سارة</option>
                                    <option>محمد علي</option>
                                </select>
                                <p className="mt-2 text-xs text-gray-500">اختر الموظف الذي قام بالشراء.</p>
                            </div>

                            <div className="md:col-span-2">
                                <InputLabel htmlFor="description" value="الوصف *" className="mb-2" />
                                <textarea
                                    id="description"
                                    rows="4"
                                    className="mt-1 block w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-3 text-gray-700 shadow-sm focus:border-[#0f5b4c] focus:ring-[#0f5b4c]"
                                    defaultValue="شراء مستلزمات مكتبية وأدوات مختبرية متعددة."
                                />
                                <p className="mt-2 text-xs text-gray-500">وصف مختصر ومفيد عن المصروف.</p>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center gap-3 text-sm text-[#b91c1c]">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fee2e2] text-[#b91c1c]">!</span>
                                <span>يرجى مراجعة الحقول الفارغة قبل الحفظ.</span>
                            </div>

                            <div className="flex items-center justify-end gap-3">
                                <SecondaryButton>إلغاء</SecondaryButton>
                                <PrimaryButton>حفظ المصروف</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <div className="mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>Component:</span>
                            <span className="rounded-md border border-[#d1d5db] bg-[#f3f4f6] px-2 py-1 text-xs">DropdownSelect</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#1f2937]">Quick Actions</h3>
                    </div>

                    <div className="grid gap-4 md:grid-cols-4">
                        {Object.values(quickActions).map(({ label, icon: Icon, title }) => (
                            <button
                                key={label}
                                type="button"
                                title={title}
                                className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-[#d1d5db] bg-[#f9fafb] p-4 text-center text-sm font-medium text-gray-700 transition hover:border-[#0f5b4c] hover:bg-white hover:text-[#0f5b4c]"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b7d8ce] bg-[#ecfdf5] text-[#0f5b4c] shadow-sm transition group-hover:scale-105">
                                    <Icon className="h-5 w-5" />
                                </span>
                                <span>{label}</span>
                            </button>
                        ))}
                    </div>
                </section>

                <section className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <div className="mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>Component:</span>
                            <span className="rounded-md border border-[#d1d5db] bg-[#f3f4f6] px-2 py-1 text-xs">Buttons & Actions</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#1f2937]">الأزرار</h3>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        <div className="rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-4">
                            <div className="mb-3 text-xs text-gray-500">Default</div>
                            <PrimaryButton className="w-full">حفظ المصروف</PrimaryButton>
                        </div>
                        <div className="rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-4">
                            <div className="mb-3 text-xs text-gray-500">Secondary</div>
                            <SecondaryButton className="w-full">إلغاء</SecondaryButton>
                        </div>
                        <div className="rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-4">
                            <div className="mb-3 text-xs text-gray-500">Disabled</div>
                            <PrimaryButton disabled className="w-full">حفظ المصروف</PrimaryButton>
                        </div>
                        <div className="rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-4">
                            <div className="mb-3 text-xs text-gray-500">Loading</div>
                            <PrimaryButton className="w-full" disabled>
                                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                جاري الحفظ
                            </PrimaryButton>
                        </div>
                        <div className="rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-4">
                            <div className="mb-3 text-xs text-gray-500">Neutral</div>
                            <SecondaryButton className="w-full">إغلاق</SecondaryButton>
                        </div>
                    </div>
                </section>

                <section className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <div className="mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>Component:</span>
                            <span className="rounded-md border border-[#d1d5db] bg-[#f3f4f6] px-2 py-1 text-xs">Form Inputs</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#1f2937]">النماذج</h3>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <InputLabel htmlFor="valid" value="الحقل السليم" className="mb-2" />
                            <TextInput
                                id="valid"
                                value="750.00"
                                className="mt-1 block w-full rounded-lg border-[#d1d5db] bg-white px-3 py-3 text-gray-700 focus:border-[#0f5b4c] focus:ring-[#0f5b4c]"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="error" value="الحقل الخاطئ" className="mb-2" />
                            <TextInput
                                id="error"
                                value=""
                                className="mt-1 block w-full rounded-lg border-[#ef4444] bg-[#fff5f5] px-3 py-3 text-red-700 placeholder:text-red-300 focus:border-[#ef4444] focus:ring-[#ef4444]"
                                placeholder="يرجى إدخال المبلغ"
                            />
                            <InputError message="هذا الحقل مطلوب." className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="checkbox" value="اختيار" className="mb-2" />
                            <div className="mt-2 flex items-center gap-3 rounded-lg border border-[#d1d5db] bg-[#f9fafb] p-3">
                                <Checkbox id="checkbox" name="checkbox" defaultChecked />
                                <span className="text-sm text-gray-700">تفعيل العنصر</span>
                            </div>
                        </div>

                        <div>
                            <InputLabel htmlFor="select" value="القائمة المنسدلة" className="mb-2" />
                            <select
                                id="select"
                                className="mt-1 block w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-3 text-gray-700 shadow-sm focus:border-[#0f5b4c] focus:ring-[#0f5b4c]"
                                defaultValue=""
                            >
                                <option value="">اختر الخيار</option>
                                <option>أدوات مكتبية</option>
                                <option>مشتريات</option>
                            </select>
                        </div>
                    </div>
                </section>
            </div>
        </SidebarLayout>
    );
}
