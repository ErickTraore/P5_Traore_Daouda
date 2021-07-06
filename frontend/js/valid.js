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

let cnthours = document.getElementById("xhours").innerHTML;
let solut = document.getElementById("xsolution");
solut.innerText = `${cnthours}`;