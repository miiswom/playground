


// ===== SECOND: ===== Write what is required for the test to pass, step-by-step
// 3 approaches: 

// 1 - triangulation: 
// 2 - fake it till you make it: 
// 3 - obvious: 
function orderTotal(order)  {
  return order.items.reduce((prev, cur) => prev + cur.price * (cur.quantity || 1), 0)
}

module.exports = orderTotal

// const orderTotal = (order) => {
//   const totalNormalItems = 
//   order.items
//     .filter(x => !x.shipping)
//     .reduce((prev, cur) => prev + cur.quantity * cur.price, 0)

//   const shippingItem = order.items.find(x => !x.shipping)
//   const shipping = totalNormalItems > 1000 ? 0 : shippingItem.price

//   return totalNormalItems + shipping
// }

// ADVANTAGES of Test runner
// --- DRY
// --- Prettier / Cleaner
// --- Consistent when working in teams
// --- CL integration
// --- auto run? Test run automatically when you run the tests