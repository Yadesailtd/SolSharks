import EventEmitter from "./event-emitter.class.js";

export default class Events extends EventEmitter {

    constructor() {
        super();

        /**
         * trigger events in event emitter
        */
        window.addEventListener('keydown', () => {
            this.trigger('keydown');
        });

        window.addEventListener('keyup', () => {
            this.trigger('keyup');
        });
    };
};