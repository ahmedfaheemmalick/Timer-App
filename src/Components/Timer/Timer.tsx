import { useState, useEffect } from 'react';
import TimerButton from '../TimerButton/TimerButton';
import styles from './Timer.module.css'

const Timer = () => {

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliSeconds, setMilliSeconds] = useState(0)
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {

        let myInterval: any;

        if (isOn) {
            myInterval = setInterval(() => {
                if (milliSeconds < 59) {
                    setMilliSeconds(milliSeconds => milliSeconds + 1)
                }
                else if (seconds < 59) {
                    setSeconds((seconds) => seconds + 1);
                    setMilliSeconds(0)
                } else if (minutes < 59) {
                    setMinutes((minutes) => minutes + 1);
                    setSeconds(0);
                    setMilliSeconds(0)
                } else {
                    if (hours < 24) {
                        setHours((hours) => hours + 1);
                        setMinutes(0);
                        setSeconds(0);
                        setMilliSeconds(0)
                    } else {
                        setHours(1);
                        setMinutes(0);
                        setSeconds(0);
                        setMilliSeconds(0)
                    }
                }
            }, 100);
        } else if (!isOn && seconds !== 0) {
            clearInterval(myInterval);
        }
        return () => clearInterval(myInterval);
    }, [isOn, milliSeconds, seconds, minutes, hours]);


    const startTimer = () => {
        setIsOn(true);
    };

    const stopTimer = () => {
        setIsOn(false);
    };

    const resetTimer = () => {
        setMilliSeconds(0)
        setSeconds(0);
        setMinutes(0);
        setIsOn(false);
    };

    return (
        <div>
            <div className={styles.timer}>
                <div className={styles.first}>{hours < 10 ? `0${hours}` : hours}</div>
                <div className={styles.second}>{minutes < 10 ? `0${minutes}` : minutes}</div>
                <div className={styles.third}>{seconds < 10 ? `0${seconds}` : seconds}</div>
                <div className={styles.fourth}>{milliSeconds < 10 ? `0${milliSeconds}` : milliSeconds}</div>
            </div>
            <div className={styles.btn_container}>
                <TimerButton id='start' buttonAction={startTimer} buttonValue={'Start'} />
                <TimerButton id='stop' buttonAction={stopTimer} buttonValue={'Stop'} />
                <TimerButton id='reset' buttonAction={resetTimer} buttonValue={'Reset'} />
            </div>
        </div>
    );
}

export default Timer;
