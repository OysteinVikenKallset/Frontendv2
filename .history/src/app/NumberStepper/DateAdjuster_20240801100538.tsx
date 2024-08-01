import React from 'react';

interface DateAdjusterProps {
    label: string;
    value: string;
    subValue?: string;
    onIncrement: () => void;
    onDecrement: () => void;
}

const DateAdjuster: React.FC<DateAdjusterProps> = ({ label, value, subValue, onIncrement, onDecrement }) => {
    return (
        <div className="flex flex-row items-center content-center justify-start text-center p-2 lg:flex-col">
            <h2 className='min-w-28 flex justify-start lg:justify-center'>{label}</h2>
            <div className="flex flex-row items-center content-center justify-start text-center p-2 lg:flex-col">
                <button onClick={onIncrement}>+</button>
                <span className='capitalize flex flex-col justify-center min-w-28 min-h-12'>
                    <span className='justify-items-center items-center justify-center flex'>{value}</span>
                    {subValue && <span className='justify-items-center items-center justify-center flex'>{subValue}</span>}
                </span>
                <button onClick={onDecrement}>-</button>
            </div>
        </div>
    );
};

export default DateAdjuster;