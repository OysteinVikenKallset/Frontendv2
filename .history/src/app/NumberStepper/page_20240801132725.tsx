"use client"
import React, { useState, useEffect } from 'react';
import Task from './Task';
import moment from 'moment';
import 'moment/locale/nb'; // Importer det norske språket
moment.locale('nb'); // Setter globalt språk til norsk
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
    const incrementOneMinute = () => setCurrentDate(currentDate.clone().add(1, 'minute'));
    const decrementOneMinute = () => setCurrentDate(currentDate.clone().subtract(1, 'minute'));
    const incrementOneSecond = () => setCurrentDate(currentDate.clone().add(1, 'second'));
    const decrementOneSecond = () => setCurrentDate(currentDate.clone().subtract(1, 'second'));

  

    const setToCurrentTime = () => {
        // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
        setCurrentDate(moment());
    };

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
                    onIncrement={incrementOneHour}
                    onDecrement={decrementOneHour}
                />
                <DateAdjuster
                    label="Minutter"
                    value={currentDate.format('mm')}
                    onIncrement={incrementOneMinute}
                    onDecrement={decrementOneMinute}
                />
                <DateAdjuster
                    label="Sekunder"
                    value={currentDate.format('ss')}
                    onIncrement={incrementOneSecond}
                    onDecrement={decrementOneSecond}
                />
                <button className='flex w-full flex-wrap content-center justify-items-center text-center justify-center flex-col' onClick={setToCurrentTime}>Sett til nåværende tidspunkt</button>
            </div>
            <Task />
        </div>
    );
};

export default Page;