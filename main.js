

$(".step").click(function () {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
	$("#line-progress").css("width", "25%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
	$("#line-progress").css("width", "50%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
	$("#line-progress").css("width", "75%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
	$("#line-progress").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});







const days1 = document.querySelector("#days")
const hours1 = document.querySelector("#hours")
const minutes1 = document.querySelector("#minutes")
const seconds1 = document.querySelector("#seconds")
const newYears = 'Jan 01 2025 00:00:00';

function countdown() {
	const newYearsDate = new Date(newYears);
	const currentDate = new Date();

	const totalSeconds = (newYearsDate - currentDate) / 1000;
	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const minutes = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds % 60);


	days1.innerHTML = formatTime(days);
	hours1.innerHTML = formatTime(hours);
	minutes1.innerHTML = formatTime(minutes);
	seconds1.innerHTML = formatTime(seconds);
	console.log(seconds)
	console.log(minutes)
	console.log(hours)

}
countdown();

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);




// Získání aktuálního měsíce a roku
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Funkce pro zjištění počtu dnů v měsíci
function getDaysInMonth(month, year) {
	return new Date(year, month + 1, 0).getDate();
}

// Funkce pro zjištění prvního dne v měsíci (0 = Neděle, 1 = Pondělí, ...)
function getFirstDayOfMonth(month, year) {
	const firstDay = new Date(year, month, 1).getDay();
	return firstDay === 0 ? 6 : firstDay - 1; // Převod na indexy pondělí (0) až neděle (6)
}

// Generování kalendáře
function generateCalendar() {
	const table = document.querySelector('table');
	const daysInMonth = getDaysInMonth(currentMonth, currentYear);
	const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
	let dayCounter = 1;

	// Nastavení názvu aktuálního měsíce a roku
	const currentMonthYear = document.getElementById('currentMonthYear');
	currentMonthYear.textContent = `${currentMonth + 1}. ${currentYear}`;

	for (let i = 0; i < 6; i++) {
		const newRow = table.insertRow();
		newRow.id = `week-${i + 1}`;

		for (let j = 0; j < 7; j++) {
			if (i === 0 && j < firstDay) {
				newRow.insertCell().textContent = '';
			} else if (dayCounter <= daysInMonth) {
				const cell = newRow.insertCell();
				cell.textContent = dayCounter;
				dayCounter++;

				if (dayCounter - 1 === new Date().getDate() && currentMonth === new Date().getMonth()) {
					cell.classList.add('current-day');
				}
			}
		}
	}
}

// Obsluha tlačítek pro přechod mezi měsíci
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

prevMonthButton.addEventListener('click', () => {
	currentMonth--;
	if (currentMonth < 0) {
		currentMonth = 11;
		currentYear--;
	}
	clearCalendar();
	generateCalendar();
});

nextMonthButton.addEventListener('click', () => {
	currentMonth++;
	if (currentMonth > 11) {
		currentMonth = 0;
		currentYear++;
	}
	clearCalendar();
	generateCalendar();
});

// Vymazání stávajícího kalendáře
function clearCalendar() {
	const table = document.querySelector('table');
	while (table.rows.length > 1) {
		table.deleteRow(1);
	}
}

generateCalendar();


const slides = document.querySelectorAll('.pic');
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
	slides.forEach(function (s, i) {
		const translateXNum = 80 * (i - slide);
		let translateYNum, rotateDeg, grayscaleNum, zIndexNum, opacityNum;
		if (translateXNum === 0) {
			translateYNum = 0;
			rotateDeg = 0;
			grayscaleNum = 0;
			zIndexNum = 1;
			opacityNum = 100;
		} else if (translateXNum < 0) {
			translateYNum = 5;
			rotateDeg = -5;
			grayscaleNum = 1;
			zIndexNum = 0;
			opacityNum = 20;
		} else {
			translateYNum = 5;
			rotateDeg = 5;
			grayscaleNum = 1;
			zIndexNum = 0;
			opacityNum = 20;
		}
		s.style.transform = `translate(${translateXNum}%, ${translateYNum}%) rotate(${rotateDeg}deg)`;
		s.style.filter = `grayscale(${grayscaleNum})`;
		s.style.zIndex = zIndexNum;
		s.style.opacity = `${opacityNum}%`
	});
};
goToSlide(0);

const nextSlide = function () {
	if (curSlide === maxSlide - 1) {
		curSlide = 0;
	} else {
		curSlide++;
	}
	goToSlide(curSlide);
}

const prevSlide = function () {
	if (curSlide === 0) {
		curSlide = maxSlide - 1
	} else {
		curSlide--;
	}
	goToSlide(curSlide);
}


btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)



function displayTime() {
	let dateTime = new Date();
	let hrs = dateTime.getHours();
	let min = dateTime.getMinutes();
	let sec = dateTime.getSeconds();
	let section = document.getElementById('section');
	let dayNight = 'am';

	if (hrs >= 12) {
		dayNight = 'pm'
	}
	if (hrs >= 12) {
		hsr = hrs - 12
	}
	if (hrs < 10) {
		hrs = '0' + hrs;
	}
	if (min < 10) {
		min = '0' + min;
	} if (sec < 10) {
		sec = '0' + sec;
	}
	document.querySelector('#digital').innerHTML = hrs + ":" + ' ' + min + ':' + ' ' + sec + ' ' + dayNight
}
setInterval(displayTime, 1000);

let logIn = document.getElementById('log-in')
logIn.addEventListener("click", opacity);

function opacity(e) {
	if (document.getElementById('log-in').checked) {
		document.getElementById('enter').style.opacity = 0
		document.getElementById('enter').style.transition = '1000ms'
	}
}

