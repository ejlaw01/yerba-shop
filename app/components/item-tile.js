import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      var price = item.get('price');
      console.log(price);
      this.get('shoppingCart').add(item);
      this.get('shoppingCart').totalCart(price);
    },
  }
});
