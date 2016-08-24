/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
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
	  this.taxRate = taxRate / 100 || 0;
	};
	Meal.prototype.setTipRate = function setTaxRate(tipRate) {
	  this.tipRate = tipRate || 0;
	};
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
	    var dinerCost = diner.getTotalDishCost() * (1 + this.taxRate) + tipShare;
	    console.log(diner.name + ': $' + dinerCost.toFixed(2));
	  }.bind(this));
	
	  var total = baseCost * (1 + this.taxRate + this.tipRate);
	
	  console.log('----------------------------------------');
	  console.log('Total: $' + total.toFixed(2));
	};
	
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
	
	var teamDinner = new Meal();
	
	teamDinner.addDiner(dylan);
	teamDinner.addDiner(zane);
	teamDinner.addDiner(tim);
	
	teamDinner.setTaxRate(9.25);
	
	console.log('----------------------------------------');
	dylan.print();
	zane.print();
	tim.print();
	
	console.log('----------------------------------------');
	teamDinner.printCostBreakdown();

/***/ }
/******/ ]);
//# sourceMappingURL=meal-calculator.1.0.0.js.map