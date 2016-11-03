import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  typeDetail: DS.attr(),
  image: DS.attr(),
  details: DS.attr(),
  price: DS.attr('number'),
  quantity: DS.attr('number'),
  reviews: DS.hasMany('review', { async: true })
});
