import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model() {
    return this.store.query('item', {
      orderBy: 'type',
      equalTo: 'bombilla'
    });
  },
  actions: {
    addToCart(item) {
      var price = item.get('price');
      this.get('shoppingCart').add(item);
      this.get('shoppingCart').totalCart(price);
    },
  }
});
