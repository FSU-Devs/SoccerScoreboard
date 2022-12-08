// in the code below, it will be for the timer

export default class Timer{
    constructor(root){
        root.innerHTML = Timer.getHTML();

        this.el = {
            minutes: root.querySelector(".timer__part--minutes"),
            seconds: root.querySelector(".timer__part--seconds"),
            control: root.querySelector(".timer__btn--control"),
            reset: root.querySelector(".timer__btn--reset"),
            halves: root.querySelector(".timer__part--halves")

        };

        this.interval = null;
        this.remainingSeconds = 0;

        //This is to operate the start button 
        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
              } else {
                this.stop();
              }
        });

        //This process is so that we will be able to set the clock time
        this.el.reset.addEventListener("click", () => {
        if(document.URL.includes("EditingPage.html")){

            const inputMinutes = prompt("Enter the number of minutes:");

            if (inputMinutes < 60) {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfaceTime();
            }
            localStorage.setItem('inputMinutes', inputMinutes);
        } else {
           //maybe do nothing (not sure yet)
        }
        

        });
    }


    //this code will update the interface time 

    updateInterfaceTime(){
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;


        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");

    }

    /** 
    //Here we will try to create the update for the half/quarter part
    //I may just add it into the code part for update interface instead
    updateInterfaceHalves(){
        const qtr = 
    }
    */

    //this interface is refering to the start and the stop button

    updateInterfaceControls(){
        if(this.interval === null){
            this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
            this.el.control.classList.add("timer__btn--start");
            this.el.control.classList.remove("timer__btn--stop");

        } else {
            this.el.control.innerHTML = `<span class="material-icons">pause</span>`; //this part makes the pause button icon
            this.el.control.classList.add("timer__btn--stop");
            this.el.control.classList.remove("timer__btn--start");

        }
    }

    start(){//will start the timer
       if(document.URL.includes("EditingPage.html")){
             //do nothing 
        } else {
        if(this.remainingSeconds === 0) return;

        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();
    
            if(this.remainingSeconds === 0){
                this.stop();
            }
        }, 1000);//this allows us to run code on a timer

        if(this.remainingSeconds === 0 && this.halves > 0){
            this.el.halves--;
        }
        this.updateInterfaceControls();
       // this.decrement();
    }
}

    stop() { 
        clearInterval(this.interval);

        this.interval = null;

        this.halves--;

        this.updateInterfaceControls();
    }

    decrement(){
        this.interval = setInterval(() => {

            if(this.remainingSeconds === 0 && this.halves >= 2){
                this.halves--;
                this.stop();
            }

        });
    }
    static getHTML(){
        return `
		<span class="timer__part timer__part--minutes">00</span>
		<span class="timer__part">:</span>
		<span class="timer__part timer__part--seconds">00</span>
        <span class="timer__part">|</span>
        <span class="timer__part--halves">2</span>

		<button type="button" class="timer__btn timer__btn--control timer__btn--start">
			<span class="material-icons">play_arrow</span>
		</button>

		<button type="button" class="timer__btn timer__btn--reset">
			<span class="material-icons">timer</span>
		</button> 
        `;
    }
}

new Timer(
    document.querySelector(".timer")
);