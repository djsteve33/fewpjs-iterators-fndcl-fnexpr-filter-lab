// Code your solution here
function findMatching(driver, myString) {
    return driver.filter( possibleMatch =>
      possibleMatch.toLowerCase() === myString.toLowerCase()
    )
  }
  
  function fuzzyMatch(driver, yourString) {
    return driver.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(yourString.toLowerCase()) === 0
    )
  }
  
  function matchName(driver, ourString) {
    return driver.filter( record => record.name === ourString)
  }