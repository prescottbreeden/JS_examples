const list = new Array(12000).join('1.1').split('.');

function removeItemsFromList() {
  var item = list.pop();
  if (item) {
    removeItemsFromList();
  }
}
removeItemsFromList();


const list = new Array(60000).join('element ').split(' ');
function removeItemsFromList() {
  var ele = list.pop();
  if (ele) {
    setTimeout(removeItemsFromList, 0);
  }
}

removeItemsFromList();
