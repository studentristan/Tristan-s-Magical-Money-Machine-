/**
 * Comment header block
 */
let total = 0;
//const IO = require('fs'); // For file I/O
let users = [];
export default class EventHandler {  //everything goes in here
  #AOS;

  constructor() {

    this.handleAddOrSubInput();
    this.handleAddPress();
    this.handleSubtractPress();
  }

  loadUsers() {
    let usersFile = IO.readFileSync(`data/users_data.csv`, 'utf8');
    let lines = usersFile.toString().split(/\r?\n/); // Automatically creates user data array on newlines
    for (let i = 0; i < lines.length; i++) {
      users.push(lines[i].toString().split(/,/)); // Makes users array Multi-Dimensional by pushing data between commas in
    }
  }

  handleAddOrSubInput() {
    document.getElementById('addOrSub').addEventListener('change', () => {
      this.setAOS(document.getElementById('addOrSub').value);
    })
  }

  handleAddPress() {
    document.getElementById('add').addEventListener('click', (event) => {
      total = this.#AOS * 1 + total;            //doesn't work without the * 1 - forces data type to flip from string to number
      document.getElementById('total').innerHTML = `<h2>$${total}</h2>`;
    })
  }

  handleSubtractPress() {
    document.getElementById('subtract').addEventListener('click', (event) => {
      total = total - this.#AOS;              //doesn't need * 1 because subtract can't be used on string, so it forces it itself
      document.getElementById('total').innerHTML = `<h2>$${total}</h2>`;
    })
  }

  setAOS(AOS) {
    this.#AOS = AOS;
  }


}

