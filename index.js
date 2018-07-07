// Code your solution in this file
function findMatching(driver, string){

  var dri = driver.filter(function(num) {
    return num.toLowerCase().includes(string.toLowerCase())
  })
  return dri
}
function fuzzyMatch(driver, string){
  var dri = driver.filter(function(num){
    return num.includes(string)
  })
  return dri
}
