
const struggleBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => {
    // make a passenger object
    // add it on the bus
    const passenger = {
        name: name,
        wallet: wallet,
        isStruggling: isStruggling
    }
    if (seat === 'back') {
        struggleBus.push(passenger);

    } else if (seat === 'front') {
        struggleBus.unshift(passenger);
    };
};
const unloadPassenger = (bus, seat)=> {
    // remove a passenger from the bus
    // return the passenger object
    if (seat === 'front') {
        return bus.shift();   
     }
     else if (seat === 'back') {
         return bus.pop(); // just Greg
     }
}
const allAboard = (bus)=> {
    // loop over the passengers
    // given the bus costs 5 bucks
    // if the passenger can afford it, charge them
    // if not kick them off the bus
    const busFare = 5;
    const vaildPassengers = [];

    bus.forEach((passenger)=>{
        if (passenger.wallet>= busFare){
            passenger.wallet -= busFare;
            vaildPassengers.push(passenger);
        }    })
   return vaildPassengers;     
};

const printToDom = (divId, textToPrinT) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrinT;
};



const busBuilder = (bus) => {
    // build domString from bus parameter
    let domString = '';
    for (let i = 0; i < bus.length; i++) {
        domString += `<div class= "bus-seat">`
        domString += `<h4>${bus[i].name}</h4>`;
        domString += `<p>${bus[i].wallet}</p>`;
        domString += `<p>${bus[i]. isStruggling}</p>`;
        domString += `</div>`;
        
    };
    printToDom('the-bus', domString);
};
const init = () => {
    addPassenger('Micheal', 3, true, 'front');
    addPassenger('Zoe', 20, false, 'back');
    addPassenger('Greg', 4, false, 'back');
    addPassenger('saul', 12, true, 'front');
    addPassenger('Matt1', 5, true, 'front');
    addPassenger('Matt2', 15, true, 'front');
    addPassenger('matt3', 3, true, 'front');


    const firstPassenger = unloadPassenger(struggleBus, 'front');
    const busPeople = allAboard(struggleBus);

    console.log(firstPassenger);    
    
   

    busBuilder(busPeople);
    console.log(struggleBus);
};

init();