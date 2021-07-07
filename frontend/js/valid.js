// const dayInput = document.getElementById("day-input");
// const calculateButton = document.getElementById("calculate-button");
// const hours = document.getElementById("hours");
// const minutes = document.getElementById("minutes");
// const seconds = document.getElementById("seconds");

// const hoursPerDay = 24;
// const minutesPerHour = 60;
// const secondsPerMinute = 60;

// calculateButton.addEventListener('click', () => {
//     let days = dayInput.value;
//     let calcHours = days * hoursPerDay;
//     let calcMinutes = calcHours * minutesPerHour;
//     let calcSeconds = calcMinutes * secondsPerMinute;

//     hours.innerText = `${calcHours} heures`;
//     minutes.innerText = `${calcMinutes} Minutes`;
//     seconds.innerText = `${calcSeconds} Secondes`;
// });
// let cnthours = document.getElementById("xhours").innerHTML;

// // let cntminutes = document.getElementById("xminutes").innerHTML;

// // let cntseconds = document.getElementById("xseconds");

// const solut = document.getElementById("xsolution");

// // sol.innerText = `${cnthours}`;
// solut.innerText = `${cnthours}`;
// // solut.innerText = `${cntminutes}`;
// console.log(solut);

// let cnthours = document.getElementById("xhours").innerHTML;
// let solut = document.getElementById("xsolution");
// solut.innerText = `${cnthours}`;

class Episode {
    constructor(title, duration, hasBeenWatched) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = hasBeenWatched;
    }
}

let firstEpisode = new Episode("Dark Beginnings", 45, true);
let secondEpisode = new Episode("The Mystery Continues", 45, false);
let thirdEpisode = new Episode("The Unexpected Climax", 60, false);

// =====================================

document.querySelector("#first-episode-info").innerText = `Episode: ${firstEpisode.title}
Duration: ${firstEpisode.duration} min
${firstEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;

document.querySelector("#second-episode-info").innerText = `Episode: ${
  secondEpisode.title
}
Duration: ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;

document.querySelector("#third-episode-info").innerText = `Episode: ${
  thirdEpisode.title
}
Duration: ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;