function getDayName(dateString) {
    let dayName = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday']
    let numberDay = new Date(dateString).getDay()
    return dayName[numberDay];
}

let cadena = '02/17/2021'

getDayName(cadena)