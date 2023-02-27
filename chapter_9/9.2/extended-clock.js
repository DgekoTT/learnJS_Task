import { Clock } from "./Clocl";

class ExtendedClock extends Clock {
    constructor ({template, precision}) {
        super(template);
        this.precision = precision ? precision : 1000;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render, this.precision)
    }
};                          