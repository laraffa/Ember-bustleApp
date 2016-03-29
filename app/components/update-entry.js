import Ember from 'ember';

export default Ember.Component.extend({
  updateEntryForm: false,
  actions: {
    updateEntryForm() {
      this.set('updateEntryForm', true);
    },
    update(entry) {
      var params = {
        headline: this.get('headline'),
        author: this.get('author'),
        article: this.get('article'),
        image: this.get('image'),
      };
      this.set('updateEntryForm', false);
      this.sendAction('update', entry, params);
    }
  }
});
