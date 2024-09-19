const returnFirstTwoDrivers = (drivers) => {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function (drivers) {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return () => {
        return (int ** 2)
    }
}


const fareDoubler = (createFareMultiplier) => {
    return createFareMultiplier * 2
}

const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier * 3
}

function selectDifferentDrivers(drivers, which) {
    return which(drivers)
}