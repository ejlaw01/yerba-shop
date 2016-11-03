import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('item', params.item_id);
  },
  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var item = params.item;
      item.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return item.save();
      });
      this.transitionTo('itemDetail', item);
    },

      addToCart(item) {
        var price = item.get('price');
        this.get('shoppingCart').add(item);
        this.get('shoppingCart').totalCart(price);
      }
  }
});
