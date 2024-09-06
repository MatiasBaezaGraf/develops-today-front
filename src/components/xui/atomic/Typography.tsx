import { ReactNode } from 'react';

import classNames from 'classnames';

export const Title = ({
    children,
    size = 'md',
    color = 'text-primary',
    bold = true,
    uppercase,
    captalize,
    spacing,
    className
}: {
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    bold?: boolean;
    uppercase?: boolean;
    captalize?: boolean;
    spacing?: 'sm' | 'md' | 'lg';
    className?: string;
}) => {
    return (
        <h1
            className={classNames(className, color, {
                'font-bold': bold,
                uppercase: uppercase,
                captalize: captalize,
                'lg:text-[20px] text-[16px]': size === 'sm',
                'lg:text-[24px] text-[20px]': size === 'md',
                'lg:text-[28px] text-[24px]': size === 'lg',
                'tracking-[0.5px]': spacing === 'sm',
                'tracking-[1px]': spacing === 'md',
                'tracking-[1.5px]': spacing === 'lg',
            })}
        >
            {children}
        </h1>
    );
};

export const Subtitle = ({
    children,
    size = 'md',
    color = 'text-primary',
    bold,
    extraBold,
    uppercase,
    captalize,
    spacing,
    className,
}: {
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    bold?: boolean;
    extraBold?: boolean;
    uppercase?: boolean;
    captalize?: boolean;
    spacing?: 'sm' | 'md' | 'lg';
    className?: string;
}) => {
    return (
        <h2
            className={classNames(color, className, {
                'font-bold': bold,
                'font-extrabold': extraBold,
                uppercase: uppercase,
                captalize: captalize,
                'lg:text-[18px] text-[14px]': size === 'sm',
                'lg:text-[22px] text-[18px]': size === 'md',
                'lg:text-[26px] text-[22px]': size === 'lg',
                'tracking-[0.5px]': spacing === 'sm',
                'tracking-[1px]': spacing === 'md',
                'tracking-[1.5px]': spacing === 'lg',
            })}
        >
            {children}
        </h2>
    );
};

export const Text = ({
    underline,
    children,
    size = 'md',
    color = 'text-border',
    bold,
    semiBold,
    extraBold,
    uppercase,
    captalize,
    spacing,
    className,
    black,
}: {
    underline?: boolean;
    children: ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: string;
    bold?: boolean;
    semiBold?: boolean;
    extraBold?: boolean;
    uppercase?: boolean;
    captalize?: boolean;
    spacing?: 'none' | 'sm' | 'md' | 'lg';
    className?: string;
    black?: boolean;
}) => {
    return (
        <p
            className={classNames(color, className, {
                'font-bold': bold,
                'font-semibold': semiBold,
                'font-black': extraBold,
                '!text-black': black,
                uppercase: uppercase,
                captalize: captalize,
                underline: underline,
                'lg:text-[10px] text-[8px]': size === 'xs',
                'lg:text-[13px] text-[10px]': size === 'sm',
                'lg:text-[15px] text-[13px]': size === 'md',
                'lg:text-[17px] text-[15px]': size === 'lg',
                'lg:text-[19px] text-[17px]': size === 'xl',
                'tracking-[0.5px]': spacing === 'sm',
                'tracking-[1px]': spacing === 'md',
                'tracking-[1.5px]': spacing === 'lg',
            })}
        >
            {children}
        </p>
    );
};

export const TextBlack = ({
    children,
    size = 'md',
    color = 'text-black',
    bold,
    semiBold,
    uppercase,
    captalize,
    spacing,
    className,
}: {
    children: ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: string;
    bold?: boolean;
    semiBold?: boolean;
    uppercase?: boolean;
    captalize?: boolean;
    spacing?: 'none' | 'sm' | 'md' | 'lg';
    className?: string;
}) => {
    return (
        <p
            className={classNames(color, className, {
                'font-bold': bold,
                'font-semibold': semiBold,
                uppercase: uppercase,
                captalize: captalize,
                'lg:text-[10px] text-[8px]': size === 'xs',
                'lg:text-[13px] text-[10px]': size === 'sm',
                'lg:text-[15px] text-[13px]': size === 'md',
                'lg:text-[17px] text-[15px]': size === 'lg',
                'lg:text-[19px] text-[17px]': size === 'xl',
                'tracking-[0.5px]': spacing === 'sm',
                'tracking-[1px]': spacing === 'md',
                'tracking-[1.5px]': spacing === 'lg',
            })}
        >
            {children}
        </p>
    );
};
