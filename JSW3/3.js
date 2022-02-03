console.log('3 Launched');

const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
    {
        title: "Billions",
        days: 3,
        hours: 5,
        minutes: 0,
    }
  ];

  function timeWatched (){
    for(let i=0; i<seriesDurations.length; i++){  
    const serieName = seriesDurations[i].title;
    const totalHours = (seriesDurations[i].days * seriesDurations[i].hours); 
    const watchLifetime = (totalHours/525960) * 100;
    const roundedHours = watchLifetime.toFixed(3);
    console.log(`${serieName} took ${roundedHours}% of my life`);
    }
  }

  timeWatched();