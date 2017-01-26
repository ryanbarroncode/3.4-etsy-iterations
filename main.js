// grab all the prices of the items in the list. and calculate the average. easy enough right? WRONG its HangerDesignCenter
var sum = items.reduce(function(total, current) {
  return total + current.price;
},0);

console.log("The average price is " + (sum / items.length).toFixed(2));
