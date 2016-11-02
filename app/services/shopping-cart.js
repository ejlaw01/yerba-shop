import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,

  add(item) {
    this.get('items').pushObject(item);
  },

  remove(item) {
    this.get('items').removeObject(item);
  },

  empty() {
    this.get('items').clear();
  },

  totalCart(price) {
    this.set('total', price + this.get('total'));
  },

  removeFromTotal(price) {
    this.set('total', this.get('total') - price);
  }


});
