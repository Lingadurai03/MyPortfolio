interface TwinkleStarProps {
    width?: number | string;
    height?: number | string;
    className?: string;
    color?: string;
}

const TwinkleStar: React.FC<TwinkleStarProps> = ({
    width = 24,
    height = 24,
    className = '',
    color = 'currentColor', // So Tailwind `text-*` works
}) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={width}
            height={height}
            fill={color}
            className={className}
        >
            <path d='M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9' />
        </svg>
    );
};

export default TwinkleStar;
