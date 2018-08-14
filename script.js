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
////////////////////////////Start of Functions//////////////////////////
function customers(min, max) {
  var customersArr = [];
  for (var i = 0; i < 15; i++) {
    customersArr[i] = Math.random() * (max - min) + min;
  }
  return customersArr;
}
function genCookies(customers, avgSales) {
  var cookiesArr = [];
  for (var i = 0; i < allhours.length; i++) {
    cookiesArr[i] = customers[i] * avgSales;
  }
  return cookiesArr;
}
/////////////////////////endFunctions///////////////////////////

var firstAndPike = {
  name: "First and Pike",
  hours: allhours,
  minCustomers: 23,
  maxCustomers: 65,
  avgSales: 6.3,
  customersByHour: customers(this.minCustomers, this.maxCustomers)
  // numberOfCookies: genCookies(this.customersByHour, this.avgSales)
};
