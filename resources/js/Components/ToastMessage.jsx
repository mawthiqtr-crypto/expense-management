import { useState, useEffect } from 'react';

export default function ToastMessage({ flash, errors }) {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('success');

    useEffect(() => {
        if (flash?.success) {
            setMessage(flash.success);
            setType('success');
            setVisible(true);
        } else if (flash?.error) {
            setMessage(flash.error);
            setType('error');
            setVisible(true);
        } else if (errors && Object.keys(errors).length > 0) {
            // If there are validation errors, show a general error toast
            setMessage('Please correct the errors in the form before submitting.');
            setType('error');
            setVisible(true);
        } else {
            setVisible(false);
        }

        if (visible) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 5000); // Hide after 5 seconds
            return () => clearTimeout(timer);
        }
    }, [flash, errors]);

    if (!visible) return null;

    return (
        <div className="fixed top-4 right-4 z-50 rtl:left-4 rtl:right-auto rtl:flex-row-reverse flex max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className={`w-2 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <div className="p-4 flex items-start w-full">
                <div className="flex-shrink-0">
                    {type === 'success' ? (
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )}
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {type === 'success' ? 'Success' : 'Error'}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {message}
                    </p>
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                    <button
                        onClick={() => setVisible(false)}
                        className="bg-white dark:bg-gray-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <span className="sr-only">Close</span>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
