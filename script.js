const display = document.querySelector("#displayTime");

function whatTimeIsIt() {
    const timeIs = new Date();
    const nowTime = timeIs.toLocaleTimeString();
    display.textContent = ` ${nowTime}`;

    // 7 দিনের নাম (রোববার থেকে শনিবার)
    const daysEnglish = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    // 12 মাসের নাম (জানুয়ারি থেকে ডিসেম্বর)
    const monthsEnglish = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // day
    const days = timeIs.getDate();
    const currentTime =
        daysEnglish[timeIs.getDay()] +
        " , " +
        monthsEnglish[timeIs.getMonth()] +
        " " +
        days;
    let display2 = (document.querySelector("#displayDate").textContent =
        currentTime);
}

setInterval(whatTimeIsIt, 1000);