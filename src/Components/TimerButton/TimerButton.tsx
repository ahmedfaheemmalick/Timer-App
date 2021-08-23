import { FC } from 'react';
import styles from './TimerButton.module.css'

type timerButtonPropTypes = {
  id: string
  buttonAction: () => void
  buttonValue: string
}

const TimerButton: FC<timerButtonPropTypes> = ({ buttonAction, buttonValue }) => {
  return (
    <div className={styles.btn} onClick={() => buttonAction()}>
      <p>{buttonValue}</p>
    </div>

  );
}

export default TimerButton;