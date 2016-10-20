import {Meteor} from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {check} from 'meteor/check';

export const Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
  Meteor.publish('messages', function
  messagesPublication() {
    return Messages.find({
      $or: [
        {private: {$ne: true}},
        {owner: this.userId},
      ],
    });
  });
}

Meteor.methods({
  'messages.insert'(text) {
    check(text, String);

    /*to sent a message user must be logged in*/
    if(!this.userId) {
      throw new
      Meteor.Error('not-authorized');
    }

    Messages.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username:Meteor.users.findOne(this.userId).username,
    });
  },
});
