'use strict'

const YEARS = "span_years"
const MONTHS = "span_months"
const DAYS = "span_days"
const HOURS = "span_hours"
const MINUTES = "span_minutes"
const SECONDS = "span_seconds"
const LAST_DATE = {
    year: 2019,
    month: 5,
    day: 29
};

(function () {
    let today = new Date()
    let countdown = {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    }

    function init() {
        countdown.years = LAST_DATE.year - today.getFullYear()
        countdown.months = LAST_DATE.month - today.getMonth()
        countdown.days = (getDaysInMonth(today.getMonth())) - today.getDate();
        countdown.hours = 24 - today.getHours()
        countdown.minutes = 60 - today.getMinutes()
        countdown.seconds = 60 - today.getSeconds()
    }

    function getDaysInMonth(month) {
        return new Date(today.getFullYear(), (month + 1), 0).getDate()
    }

    function update() {
        setInterval(function () {
            render()
            countdown.seconds--
            checkForUnitIncrements()
        }, 1000)
    }


    function checkForUnitIncrements() {
        if (countdown.seconds == 0) {
            resetSecondDecrementMinute()
            if (countdown.minutes == 0) {
                resetMinuteDecrementHour()
                if (countdown.hours == 0) {
                    resetHourDecrementDay()
                    if (countdown.days == 0) {
                        resetDayDecrementMonth()
                        if (countdown.months < 0) {
                            resetMonthDecrementYear()
                        }
                    }
                }
            }
        }
    }

    function resetSecondDecrementMinute() {
        countdown.minutes--
        countdown.seconds = 60
    }

    function resetMinuteDecrementHour() {
        countdown.hours--
        countdown.minutes = 60
    }

    function resetHourDecrementDay() {
        countdown.days--
        countdown.hours = 24
    }

    function resetDayDecrementMonth() {
        countdown.months--
        countdown.days = getDaysInMonth(countdown.months)
    }

    function resetMonthDecrementYear() {
        countdown.year--
        countdown.months = 12
    }

    function render() {
        // document.getElementById(YEARS).innerHTML = countdown.years
        document.getElementById(MONTHS).innerHTML = countdown.months
        document.getElementById(DAYS).innerHTML = countdown.days
        document.getElementById(HOURS).innerHTML = countdown.hours
        document.getElementById(MINUTES).innerHTML = countdown.minutes
        document.getElementById(SECONDS).innerHTML = countdown.seconds
    }

    init()
    update()
})()