import Ember from 'ember';

export default Ember.Component.extend({
  addNewEntry: false,
  actions: {
    entryFormShow() {
      this.set('addNewEntry', true);
    },
    save1() {
         var params = {
           headline: this.get('headline'),
           author: this.get('author'),
           article: this.get('article'),
           image: this.get('image'),

         };
         this.set('addNewEntry', false);
         this.sendAction('save2', params);
       }
     }
   });
