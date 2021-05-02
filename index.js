/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employeeRecord) {
    return {
        firstName: employeeRecord[0],
        familyName: employeeRecord[1],
        title: employeeRecord[2],
        payPerHour: employeeRecord[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};

function createEmployeeRecords(array) {
    let employeeRecord = array.map(function(data) {
        return createEmployeeRecord(data)
    })
    return employeeRecord
};

function createTimeInEvent(timeIn) {
    let date = timeIn.split(' ')[0];
    let time = timeIn.split(' ')[1];

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time, 10),
        date,
    })
    return this
};

function createTimeOutEvent(timeOut) {
    let date = timeOut.split(' ')[0];
    let time = timeOut.split(' ')[1];

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time, 10),
        date,
    })
    return this
};

function hoursWorkedOnDate(day) {
    let startTime = this.timeInEvents.find(function(e) {
        return e.date === day
    })

    let stopTime = this.timeOutEvents.find(function(e) {
        return e.date === day
    })
    return (stopTime.hour - startTime.hour) / 100
};

function wagesEarnedOnDate(day) {
    let wageOwed = hoursWorkedOnDate.call(this, day) * this.payPerHour

    return parseFloat(wageOwed.toString())
};

function allWagesFor() {
    let daysWorked = this.timeInEvents.map(function(e) {
        return e.date
    })

    let amountPaid = daysWorked.reduce(function(memo, y) {
        return memo + wagesEarnedOnDate.call(this, y)
    }.bind(this), 0)

    return amountPaid;
};

function findEmployeeByFirstName(srcArray, firstName) {
    let matches = srcArray.find(function(e) {
        return e.firstName === firstName
    })
    return matches
};

function calculatePayroll(employeeRecords) {
    let totalPaid = employeeRecords.reduce(function(memo, y) {
        return memo + allWagesFor.call(y)
    }, 0)

    return totalPaid;
};