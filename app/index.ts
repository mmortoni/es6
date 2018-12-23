import moment from 'moment';
import './styles/modules/MessageBox.scss';
import './styles/modules/MessagesArea.scss';

import Message from './model/message.model';
const template: any = require('./messages.html');
const logo: any = require('./images/especializa_logo.jpg');

console.log('Index started');

const Message = function(text) {
  this.text = text;
  this.created = Date.now();
};

console.dir(new Message(""));

/* eslint no-undef: 0 */
(<HTMLButtonElement> document.getElementById('send')).onclick = () => {
  const m = new Message(
    (<HTMLInputElement> document.getElementById('message')).value,
  );
  (<HTMLInputElement> document.getElementById('messages'))
  .innerHTML += template({
    m,
    relativeTime: moment(m.created).fromNow(),
  });
};

(<HTMLImageElement> document.getElementById('logo')).src = logo;

if (module && module.hot) {
  module.hot.accept();
}
