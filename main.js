// grab all the prices of the items in the list. and calculate the average. easy enough right? WRONG its HangerDesignCenter
// var sum = items.reduce(function(total, current) {
//   return total + current.price;
// },0);
//
// console.log("The average price is " + (sum / items.length).toFixed(2));


/*
*  number 2
*/
var newArray = items.filter(function(current){
  return current.price > 14 && current.price < 18;
  console.log(newArray);

})
console.log(newArray);

/*
* number 3
*/
 // use forEach
var itemArray = items.forEach(function(current) {
  return current.price > 20;
  console.log(itemArray);
})
