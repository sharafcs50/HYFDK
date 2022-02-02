console.log('Live');

const names = ["Peter","Ahmad","Yana","kristina","Rasmus","Samuel","katrine","Tala",];
const nameToRemove = "Ahmad";
console.log(names);
  for(i=0; i<names.length; i++){
      console.log(names[i]);
      if (names[i] == nameToRemove) {
          names.splice([i],1);
      };
  }