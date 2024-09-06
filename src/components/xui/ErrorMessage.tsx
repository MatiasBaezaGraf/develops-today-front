const ErrorMessage = ({
    message,
    show,
    className,
}: {
    message: string | string[];
    show: boolean;
    className?: string;
}) => {
    if (show) {
        let messageContent;
        if (Array.isArray(message)) {
            messageContent = message.map((item, index) => (
                <h1
                    key={index}
                    className={`text-[#da4848] text-left fr gap-[5px] text-[15px] font-semibold`}
                >
                    {item}
                </h1>
            ));
        } else {
            messageContent = (
                <h1
                    className={`text-[#da4848] text-left fr gap-[5px] text-[15px] font-semibold`}
                >
                    {message}
                </h1>
            );
        }

        return (
            <div
                className={`w-full py-[5px] px-[10px] rounded-[15px] bg-[#fad1d1] border-[#da4848] border-[3px] shadow-banner ${className}`}
            >
                {messageContent}
            </div>
        );
    } else {
        return <></>;
    }
};

export default ErrorMessage;
