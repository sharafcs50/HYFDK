console.log("2 Live");

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  function timeRequired(){
     const calc = travelInformation.destinationDistance/travelInformation.speed
     console.log(calc);
     const minutes = 60 * calc;
     const hours = Math.floor(minutes / 60);
     const remMinutes = Math.floor(minutes % 60);
     console.log(`${hours} hours and ${remMinutes} minutes`);
  }

  timeRequired();
//   const travelTime = notThisFunctionName(travelInformation);
//   console.log(travelTime);  