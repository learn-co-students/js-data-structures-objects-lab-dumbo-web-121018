// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(){
  newDriver = {...driver}
  newDriver.name = "Sam"
  newDriver.address = "11 Broadway"
  return newDriver
}
function destructivelyUpdateDriverWithKeyAndValue(){
  driver.name = "Sam"
  driver.address = "12 Broadway"
  return driver
}
function deleteFromDriverByKey(){
  anotherDriver = {...driver}
  delete anotherDriver.name
  return anotherDriver
}
function destructivelyDeleteFromDriverByKey(){
  delete driver.name
  return driver
}
