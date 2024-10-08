const orderTotal = require("./order-total")

// ===== FIRST: ===== the tests are units and should test one complexity at once

// TEST 1 
// if(orderTotal({
//   items: [
//     {name: "Dragon food",         price: 8,   quantity: 1},
//     {name: "Dragon cage (small)", price: 800, quantity: 1}
//   ]
// }) !== 808) {
//   throw new Error("Check fail: Happy path (Example 1)")
// }

test("Example 1", () => {
  expect(orderTotal({
    items: [
      {name: "Dragon food",         price: 8,   quantity: 1},
      {name: "Dragon cage (small)", price: 800, quantity: 1}
    ]
  })).toBe(808)
})

// TEST 2
// if(orderTotal({
//   items: [
//     {name: "Dragon collar",   price: 20, quantity: 1},
//     {name: "Dragon chew toy", price: 40, quantity: 1}
//   ]
// }) !== 60 ) {
//   throw new Error("Check fail: Happy path (Example 2)")
// }

test("Example 2", () => {
  expect(orderTotal({
    items: [
      {name: "Dragon collar",   price: 20, quantity: 1},
      {name: "Dragon chew toy", price: 40, quantity: 1}
    ]
  })).toBe(60)
})

// TEST 3
// if(orderTotal({
//   items: [
//     {name: "Dragon candy",   price: 2, quantity: 3},
//   ]
// }) !== 6 ) {
//   throw new Error("Check fail: Happy path (Example Quantity)")
// }

test("Example 3: quantity", () => {
  expect(orderTotal({
    items: [
      {name: "Dragon candy",   price: 2, quantity: 3},
    ]
  })).toBe(6)
})

// TEST 4

// if(orderTotal({
//   items: [
//     {name: "Dragon candy",   price: 3},
//   ]
// }) !== 3 ) {
//   throw new Error("Check fail: Happy path (No quantity specified)")
// }

it("No quantity specified", () => {
  expect(orderTotal({
    items: [
      {name: "Dragon candy",   price: 3},
    ]
  })).toBe(3)
})