export default function validateDictionary(items) {
  items.map((item, index, arr) => {
    // Delete the problem property from each item
    delete item['problem'];

    // Remove current item from the array
    const filteredArr = arr.filter((_, id) => id !== index);

    /* Match current item with the items from filtered array to find
    the problems and update the problem property of current item */
    filteredArr.forEach(element => {
      if (element.domain === item.domain && element.range === item.range) {
        item['problem'] = 'Duplicate';
      }
      if (element.domain === item.domain && element.range !== item.range) {
        item['problem'] = 'Fork';
      }
      if (element.domain === item.range && element.range === item.domain) {
        item['problem'] = 'Cycle';
      }
      if (element.range === item.domain && element.domain !== item.range) {
        item['problem'] = 'Chain';
      }
    });
  });

  // Set items with problems
  localStorage.setItem('dictionary', JSON.stringify(items));
}
