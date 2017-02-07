// grab all the prices of the items in the list. and calculate the average. easy enough right? WRONG its HangerDesignCenter
var sum = items.reduce(function(total, current) {
  return total + current.price;
},0);

console.log("The average price is " + (sum / items.length).toFixed(2));


/*
*  number 2
*/
var newArray = items.filter(function(current){
  return current.price > 14 && current.price < 18;
});

console.log(newArray);

/*
* number 3
*/
 // use forEach
var itemArray = items.filter(function(current) {
  return current.currency_code === 'GBP';
})
itemArray.forEach(function(item){
  console.log(item.title + " " + item.price);
})
// console.log(itemArray);


/*
* Number FOUR!!!
*/
var woodArray = items.filter(function(item){
  if(item.materials.indexOf("wood") !== -1){
   console.log(item.materials);
   console.log(item.title + " is made of wood");
  }
})
console.log(woodArray);

/*
* Number FIVE!!!
*/

var materialsGreaterThanEight = items.filter(function(item){
  return item.materials.length > 7;
})

materialsGreaterThanEight.forEach(function(item){
  console.log(item.title);
for(var i = 0; i > 7; i++){
  console.log(i);
}
})
console.log(materialsGreaterThanEight);


/*
*Number six!!!
*/

var itemsSold = items.filter(function(item){
  console.log(item.quantity + " were made by their sellers");
})
