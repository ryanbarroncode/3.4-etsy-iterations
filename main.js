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
var wood = items.filter(function(items){
  return items.materials.includes("wood")
});
var woodenItems = wood.map(function(items){
  return items.title;
});
console.log(woodenItems);

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

var whoMade = items.filter(function(items){
  return items.who_made === "i_did";
});
console.log(whoMade.length + " were made by their sellers");
