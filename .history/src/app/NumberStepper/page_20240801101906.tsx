"use client"
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import DateAdjuster from './DateAdjuster'; // Importer DateAdjuster-komponenten

const Page = () => {
    const [currentDate, setCurrentDate] = useState(moment());

    const incrementOneYear = () => setCurrentDate(currentDate.clone().add(1, 'year'));
    const decrementOneYear = () => setCurrentDate(currentDate.clone().subtract(1, 'year'));
    const incrementOneMonth = () => setCurrentDate(currentDate.clone().add(1, 'month'));
    const decrementOneMonth = () => setCurrentDate(currentDate.clone().subtract(1, 'month'));
    const incrementOneDay = () => setCurrentDate(currentDate.clone().add(1, 'day'));
    const decrementOneDay = () => setCurrentDate(currentDate.clone().subtract(1, 'day'));
    const incrementOneHour = () => setCurrentDate(currentDate.clone().add(1, 'hour'));
    const decrementOneHour = () => setCurrentDate(currentDate.clone().subtract(1, 'hour'));




//Increment Minute

const incrementOneMinute = () => {
    // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
    setCurrentDate(prevDate => moment(prevDate).add(1, 'minutes'));
};

//Decrement Minute

const decrementOneMinute = () => {
    // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
    setCurrentDate(prevDate => moment(prevDate).subtract(1, 'minutes'));
};

//Increment Second

const incrementOneSecond = () => {
    // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
    setCurrentDate(prevDate => moment(prevDate).add(1, 'seconds'));
};

//Decrement Second

const decrementOneSecond = () => {
    // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
    setCurrentDate(prevDate => moment(prevDate).subtract(1, 'seconds'));
};


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(moment());
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("ClearInterval");
        };
    }, []);

    return (
        <div>
            <h1>Oppgave til kandidater for frontend-stilling</h1>
            <div className="flex flex-col justify-center text-center pt-5 pb-5 lg:flex-row">
                <DateAdjuster
                    label="År"
                    value={currentDate.format('YYYY')}
                    onIncrement={incrementOneYear}
                    onDecrement={decrementOneYear}
                />
                <DateAdjuster
                    label="Måneder"
                    value={currentDate.format('MM')}
                    subValue={currentDate.format('MMMM')}
                    onIncrement={incrementOneMonth}
                    onDecrement={decrementOneMonth}
                />
                <DateAdjuster
                    label="Dager"
                    value={currentDate.format('DD')}
                    subValue={currentDate.format('dddd')}
                    onIncrement={incrementOneDay}
                    onDecrement={decrementOneDay}
                />
                <DateAdjuster
                label="Timer"
                value={currentDate.format('HH')}
                onIncrement={incrementOneDay}
                onDecrement={decrementOneDay}
            />
            <DateAdjuster
            label="Minutter"
            value={currentDate.format('mm')}
            onIncrement={incrementOneDay}
            onDecrement={decrementOneDay}
        />
        <DateAdjuster
        label="Sekunder"
        value={currentDate.format('ss')}
        onIncrement={incrementOneDay}
        onDecrement={decrementOneDay}
    />
            </div>
        </div>
    );
};

export default Page;