function chocolateBars() {
  var chocolateBars = [
    'snickers', 'hundredgrand', 'kitkat', 'skittles'
  ]
}
function addElementToBeginningOfArray() {
  var numbers = [
    '1', '2', '3', '4'
  ]
  numbers.unshift('5')
}
function destructivelyAddElementToBeginningOfArray() {
  var numbers = [
    '1', '2', '3', '4'
  ]
  numbers('5', ...numbers)
}
