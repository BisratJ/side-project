import { cn } from '@/lib/utils'; // Assuming cn is a utility like classnames or tailwind-merge

export const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn('size-7 w-7', className)}
            viewBox="0 0 71 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Poppins, sans-serif"
                fontSize="48"
                fontWeight="bold"
                fill="currentColor"
            >
                BG
            </text>
        </svg>
    );
};

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn('size-7 w-7', className)}
            viewBox="0 0 71 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Poppins, sans-serif"
                fontSize="48"
                fontWeight="bold"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
            >
                BG
            </text>
        </svg>
    );
};
