function Cart(localStorageKey) {
    const cart = {
    cartItem: [],
    loadFromStorage(){
    this.cartItem = JSON.parse(localStorage.getItem(localStorageKey)) || [
                    {
                        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                        quantity: 2,
                        deliveryOptionId: '1'
                    },
                    {
                        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                        quantity: 1,
                        deliveryOptionId: '2'
                    }

                ];
        },

    saveToStorage(){
    localStorage.setItem(localStorageKey, JSON.stringify(this.cartItem));
    },

    addToCart(productId) {
    let matchingItem;
    this.cartItem.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItem.push(
        {
            productId,
            quantity: 1,
            deliveryOptionId: '1'

        });
    }
    this.saveToStorage();
},

    updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
    this.cartItem.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
},

    removeCart(productId) {
    const newCart = [];

    this.cartItem.forEach((cartItem) => {
        if (cartItem.productId === productId){
            newCart.push(cartItem);
        }
    }
    );

    this.cartItem = newCart;
    this.saveToStorage();
}

}

return cart;

}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

console.log(cart);
console.log(businessCart);

