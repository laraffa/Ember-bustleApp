import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(entry, params) {
    this.sendAction('update', entry, params);
    },
    delete(entry) {
      if (confirm('Are you sure you want to delete this?')) {
        this.sendAction('destroyEntry', entry);
      }
    }
  }
});
