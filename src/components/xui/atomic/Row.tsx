import classNames from 'classnames';

export const Row = ({
    children,
    gap,
    justification,
    alignment,
    className
}: {
    children: React.ReactNode;
    gap?: 'xs' | 'sm' | 'md' | 'lg';
    justification?:
        | 'start'
        | 'end'
        | 'center'
        | 'between'
        | 'around'
        | 'evenly';
    alignment?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    className?: string;
}) => {
    return (
        <div
            className={`w-full ${classNames(`fr`, className, {
                'items-start': alignment === 'start',
                'items-end': alignment === 'end',
                'items-center': alignment === 'center',
                'items-baseline': alignment === 'baseline',
                'items-stretch': alignment === 'stretch',
                'justify-between': justification === 'between',
                'justify-around': justification === 'around',
                'justify-evenly': justification === 'evenly',
                'justify-start': justification === 'start',
                'justify-end': justification === 'end',
                'justify-center': justification === 'center',
                'lg:gap-[5px] gap-[4px]': gap === 'xs',
                'lg:gap-[10px] gap-[6px]': gap === 'sm',
                'lg:gap-[20px] gap-[15px]': gap === 'md',
                'lg:gap-[30px] gap-[24px]': gap === 'lg',
            })}`}
        >
            {children}
        </div>
    );
};
