import Ember from 'ember';

export default Ember.Route.extend({
shoppingCart: Ember.inject.service(),
  model: function() {
    return this.store.query('item', {
      orderBy: 'type',
      equalTo: 'yerba'
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
