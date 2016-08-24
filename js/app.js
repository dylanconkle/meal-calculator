var Diner = function Diner(name) {
  this.dishes = [];
  this.name = name;
};
Diner.prototype.addDish = function addDish(name, cost) {
  this.dishes.push({
    name: name,
    cost: cost
  });
};
Diner.prototype.getTotalDishCost = function getTotalDishCost() {
  return this.dishes.reduce(function _sum(sum, dish) {
    return sum += dish.cost;
  }, 0);
};
Diner.prototype.print = function print() {
  console.log('Diner: ' + this.name + 'with total dish cost $' + this.getTotalDishCost().toFixed(2));
};
var Meal = function Meal() {
  this.diners = [];
  this.taxRate = 0.0825;
  this.tipRate = 0.15;
};
Meal.prototype.addDiner = function addDiner(diner) {
  if (diner) {
    this.diners.push(diner);
  }
};
Meal.prototype.setTaxRate = function setTaxRate(taxRate) {
  this.taxRate = (taxRate/100) || 0;
};
Meal.prototype.setTipRate = function setTaxRate(tipRate) {
  this.tipRate = tipRate || 0;
}
Meal.prototype.getTotalMealCost = function getTotalMealCost() {
  var baseCost = this.diners.reduce(function _sum(sum, diner) {
    return sum += diner.getTotalDishCost();
  }, 0);
  return baseCost * (1 + this.taxRate + this.tipRate);
};
Meal.prototype.printCostBreakdown = function printCostBreakdown() {
  var baseCost = this.diners.reduce(function _sum(sum, diner) {
    return sum += diner.getTotalDishCost();
  }, 0);
  var tip = baseCost * this.tipRate;
  var tipShare = tip / this.diners.length;
  var tax = baseCost * this.taxRate;
  console.log('Total tip: ' + tip + ' (' + this.tipRate.toFixed(2) + '%)');
  console.log('Total tax: ' + tax + ' (' + this.taxRate.toFixed(2) + '%)');
  console.log('----------------------------------------');
  console.log('Final For Each:\n');
  this.diners.forEach(function _printDiner(diner) {
    var dinerCost = (diner.getTotalDishCost() * (1 + this.taxRate)) + tipShare;
    console.log(diner.name + ': $' + dinerCost.toFixed(2));
  }.bind(this));

  var total = baseCost * (1 + this.taxRate + this.tipRate);

  console.log('----------------------------------------');
  console.log('Total: $' + total.toFixed(2));
}

var dylan = new Diner('Dylan');
var zane = new Diner('Zane');
var tim = new Diner('Tim');
dylan.addDish('Steak', 25);
dylan.addDish('Potatoes', 2);
zane.addDish('Grilled Chicken', 13);
zane.addDish('Fries', 2);
tim.addDish('Burger', 14);
tim.addDish('Beer', 5);
tim.addDish('Fries', 3);

var thaDinner = new Meal();

thaDinner.addDiner(dylan);
thaDinner.addDiner(zane);
thaDinner.addDiner(tim);

thaDinner.setTaxRate(8.25);

console.log('----------------------------------------');
dylan.print()
zane.print()
tim.print()

console.log('----------------------------------------');
thaDinner.printCostBreakdown();
