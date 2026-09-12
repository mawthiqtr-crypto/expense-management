

export default function PrimaryButton({
    className = '',
    disabled,
    type = 'button',
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center justify-center gap-2 rounded-lg border border-[#0f5b4c] bg-[#0f5b4c] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#0d4f42] focus:outline-none focus:ring-2 focus:ring-[#0f5b4c] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${
                    disabled ? 'opacity-60' : ''
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
