/**
 * Comment header block
 */

'use strict';

import EventHandler from './EventHandler.js';

export default class Main {

  constructor() {
    new EventHandler();
    console.log(`Money Maker Now Running...`);
  }
}

window.addEventListener('load', () => {
  new Main();
});
