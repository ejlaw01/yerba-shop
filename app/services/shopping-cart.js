import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,

  add(item) {
    if(item.get('quantity') === 0){
      this.get('items').pushObject(item);
    }
    item.set('quantity', item.get('quantity') + 1);
  },
  remove(item) {
    if(item.get('quantity') === 1) {
    this.get('items').removeObject(item);
    }
    item.set('quantity', item.get('quantity') -1);
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
