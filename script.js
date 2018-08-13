"use strict";
var allhours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2am",
  "3pm",
  "4am",
  "5pm",
  "6pm",
  "7pm",
  "8pm"
];
var storeArr = [];

function customers(min, max) {
  //generates random numbers for the amount of customers
  return Math.random() * (max - min) + min;
}
var firstAndPike = {
  name: "First and Pike",
  hours: allhours,
  minCustomers: 23,
  maxCustomers: 65,
  avgSales: 6.3,
  genRandomCust: function() {
    var customersArr = [];
    for (var i = 0; i < this.hours.length; i++) {
      customersArr[i] = customers(this.minCustomers, this.maxCustomers);
    }
    return customersArr;
  }
};
