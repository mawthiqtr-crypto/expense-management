import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from '@/Components/DangerButton';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import Dropdown from '@/Components/Dropdown';
import Modal from '@/Components/Modal';
import { useState } from 'react';

export default function ComponentsGallery() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <SidebarLayout header="UI Components Gallery">
            <Head title="Components Gallery" />

            <div className="space-y-8">
                {/* Buttons */}
                <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4 border-b pb-2">Buttons</h3>
                    <div className="flex flex-wrap gap-4">
                        <PrimaryButton>Primary Button</PrimaryButton>
                        <SecondaryButton>Secondary Button</SecondaryButton>
                        <DangerButton>Danger Button</DangerButton>
                        <PrimaryButton disabled>Disabled Primary</PrimaryButton>
                    </div>
                </section>

                {/* Form Inputs */}
                <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4 border-b pb-2">Form Inputs</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <InputLabel htmlFor="sample_text" value="Standard Text Input" />
                            <TextInput id="sample_text" className="mt-1 block w-full" placeholder="Type something..." />
                        </div>
                        
                        <div>
                            <InputLabel htmlFor="sample_error" value="Input with Error" />
                            <TextInput id="sample_error" className="mt-1 block w-full border-red-500" value="Invalid data" />
                            <InputError message="This field is required and has an error." className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="sample_select" value="Select Dropdown" />
                            <select id="sample_select" className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>

                        <div className="flex items-center mt-6">
                            <Checkbox id="sample_checkbox" name="remember" />
                            <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Checkbox Example</span>
                        </div>
                    </div>
                </section>

                {/* Cards / Data Display */}
                <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4 border-b pb-2">Cards & Stats</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md border border-gray-100 dark:border-gray-600">
                            <div className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</div>
                            <div className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-1">$45,231.89</div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md border border-gray-100 dark:border-gray-600">
                            <div className="text-sm text-gray-500 dark:text-gray-400">Active Users</div>
                            <div className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-1">1,204</div>
                        </div>
                    </div>
                </section>

                {/* Modals & Dropdowns */}
                <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4 border-b pb-2">Overlays</h3>
                    <div className="flex gap-4">
                        <PrimaryButton onClick={() => setModalOpen(true)}>Open Modal</PrimaryButton>
                        
                        <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
                            <div className="p-6">
                                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                    Sample Modal Title
                                </h2>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    This is a sample modal dialog demonstrating how overlays work in the application shell.
                                </p>
                                <div className="mt-6 flex justify-end">
                                    <SecondaryButton onClick={() => setModalOpen(false)}>Close</SecondaryButton>
                                    <PrimaryButton className="ms-3" onClick={() => setModalOpen(false)}>Confirm Action</PrimaryButton>
                                </div>
                            </div>
                        </Modal>

                        <Dropdown>
                            <Dropdown.Trigger>
                                <SecondaryButton>Click for Dropdown</SecondaryButton>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href="#">Action 1</Dropdown.Link>
                                <Dropdown.Link href="#">Action 2</Dropdown.Link>
                                <Dropdown.Link href="#" as="button">Action 3 (Button)</Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </section>
            </div>
        </SidebarLayout>
    );
}
