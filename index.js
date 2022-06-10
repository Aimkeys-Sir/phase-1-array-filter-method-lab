// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(arrayOfDrivers, string)
{
    //filter returns an array
   let match = arrayOfDrivers.filter(element => element.toUpperCase() === string.toUpperCase())
   return match
}
function fuzzyMatch(arrayOfDrivers,string)
{
    return arrayOfDrivers.filter(item=>item[0]===string[0])
}
function matchName(arrayOfDrivers, string)
{
    return arrayOfDrivers.filter(item =>item.name===string)
}
//console.log("saMMy".toUpperCase())
//console.log(findMatching(drivers,"saMmy"))
