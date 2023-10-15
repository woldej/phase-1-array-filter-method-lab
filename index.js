// Code your solution here
function findMatching(driver,name){
    return driver.filter(driver =>
        driver.toLowerCase() === name.toLowerCase()
    );
}
function fuzzyMatch(driver,name){
   // return driver.filter(driver =>
   //     driver.toLowerCase().startsWith(name.toLowerCase())
   // );
    return driver.filter(function(driver){
        return driver.toLowerCase().startsWith(name.toLowerCase())
    })
}

function matchName(driverObj,name){
    return driverObj.filter(function(driverObj){
        return driverObj.name===name
    })
}