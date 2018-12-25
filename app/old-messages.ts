import moment from 'moment';

import Message from './model/message.model';
import './styles/modules/MessagesArea.scss';
import { Store } from './utils';

const template: any = require('./messages.html');
const store: Store<Message> = new Store<Message>();
const messages = store.list();

const messagesContent = messages
  .map((m: Message) =>
      template({ m, relativeTime: moment(m.created).fromNow() }))
  .reduce((result, current) => result + current);

(<HTMLElement> document.getElementById('messages')).innerHTML = messagesContent;

console.log('old-messages');
