import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-timer-countdown',
    templateUrl: 'timer-countdown.component.html',
    styleUrls: ['timer-countdown.component.scss'
    ]
})
export class TimerCountdownComponent implements OnInit {

    constructor() {
    }

    private intervalId = 0;
    message = '';
    remainingTime: number;
    min: number;
    sec: number;


    setMin(value) {
        this.min = value;
    }

    setSec(value) {
        this.sec = value;
    }

    clearTimer() {
        clearInterval(this.intervalId);
    }

    ngOnInit() {
        this.reset();
        this.start();
    }

    ngOnDestroy() {
        this.clearTimer();
    }

    start() {
        this.countDown();
        if (this.min == 0 && this.sec==0) {
           this.message='timeout'
        }
    }

    stop() {
        this.clearTimer();
        this.message = `Holding at T-${this.remainingTime} seconds`;
    }

    reset() {
        this.clearTimer();
        this.min = this.sec = 0;
        this.message = `Click start button to start the Countdown`;
    }

    private countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
        if(this.sec-1 == 0){
          this.min-=1;
          this.sec=59;
        } else this.sec -= 1;
          if (this.min === 0 && this.sec == 0) clearInterval(this.intervalId)
        }, 1000);
    }
}
