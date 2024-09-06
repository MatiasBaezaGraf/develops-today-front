export const Card = ({
    children,
    className,
    padding = true,
}: {
    children: React.ReactNode;
    className?: string;
    padding?: boolean;
}) => {
    return (
        <div
            className={`bg-white text-black justify-center items-center ${className} ${
                padding ? 'p-[10px]' : 'p-0'
            }`}
        >
            {children}
        </div>
    );
};

export const CardDobleRow = ({ children }: { children: React.ReactNode }) => {
    return <div className="grid grid-cols-2">{children}</div>;
};
