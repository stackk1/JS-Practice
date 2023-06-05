// Confirm console is responding
console.log('test start');
// transformation function
function dataTransform(data) {
  const lineItemsCount = {};
  let totalItemCount = 0;
  let orderCount = 0;
  let totalLineItemCount = 0;
 
  //get array of orders from data object
  for (const order of data.orders) {
    //increase total number of orders by 1 for each order in data.orders
    orderCount++;
    for (const lineItem of order.line_items) {
      //increase total number of items ordered for each lineitem in order.line_items
      totalItemCount++;
      // check if lineitem object has been created, if yes increment output of that ID by 1, else create object
      if (lineItemsCount[lineItem.id]) {
        lineItemsCount[lineItem.id]++;
      } else {
        lineItemsCount[lineItem.id] = 1;
      }
    }
  }
  // calculate average order size
  const averageLineItems = totalItemCount / orderCount;
  //assign variable to output keys
  return {
    order_count: orderCount,
    total_itmes: totalItemCount,
    average_line_items: averageLineItems,
    line_items_count: lineItemsCount,
  };
}
 
//Order data
const data = {
  orders: [
    {
      id: 1,
      line_items: [
        { id: 'abc', name: 'Apple' },
        { id: 'def', name: 'Pear' },
      ],
    },
    {
      id: 2,
      line_items: [
        { id: 'abc', name: 'Apple' },
        { id: 'ghi', name: 'Orange' },
      ],
    },
    {
      id: 3,
      line_items: [{ id: 'jkl', name: 'Lemon' }],
    },
  ],
};
 
const output = dataTransform(data);
console.log(output);
console.log('test complete');
