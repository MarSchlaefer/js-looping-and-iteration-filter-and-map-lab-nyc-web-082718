// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  highEarn = []
  drivers.filter(function (driver) { if (driver.revenue > revenue) {
    highEarn.push(driver)
  } });
  return highEarn
}


function driverNamesWithRevenueOver(drivers, revenue) {
  highEarners = []
  drivers.filter(function (driver) { if (driver.revenue > revenue) {
    highEarners.push(driver.name)
  }
  })
  return highEarners
}

function exactMatch(drivers, object) {
  matches = []
  drivers.filter(function(driver) {
    if (driver[Object.keys(object)[0]] === object[Object.keys(object)[0]]) {
      matches.push(driver)
    }
  })
  return matches
}

function exactMatchToList(drivers, object) {
  matches = []
  drivers.filter(function(driver) {
    if (driver[Object.keys(object)[0]] === object[Object.keys(object)[0]]) {
      matches.push(driver.name)
    }
  })
  return matches
}
