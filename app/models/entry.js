import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  article: DS.attr()  
});
