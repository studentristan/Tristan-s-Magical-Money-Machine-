/**
 * Comment header block
 */
let total = 0;
export default class EventHandler {  //everything goes in here

  constructor() {
    this.handleAddPress();
    this.handleSubtractPress();
  }

  handleAddPress() {
    document.getElementById('add').addEventListener('click', (event) => {
      total = total + 1;
      document.getElementById('total').innerHTML = `<h2>$${total}</h2>`;
    })
  }

  handleSubtractPress() {
    document.getElementById('subtract').addEventListener('click', (event) => {
      total = total - 1;
      document.getElementById('total').innerHTML = `<h2>$${total}</h2>`;
    })
  }
}

