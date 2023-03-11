$(function () {

  var goToCartIcon = function($addTocartBtn){
    var $cartIcon = $(".my-cart-icon");
    var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
    $addTocartBtn.prepend($image);
    var position = $cartIcon.position();
    $image.animate({
      top: position.top,
      left: position.left
    }, 500 , "linear", function() {
      $image.remove();
    });
  }

  $('.my-cart-btn').myCart({
    currencySymbol: '$',
    classCartIcon: 'my-cart-icon',
    classCartBadge: 'my-cart-badge',
    classProductQuantity: 'my-product-quantity',
    classProductRemove: 'my-product-remove',
    classCheckoutCart: 'my-cart-checkout',
    affixCartIcon: true,
    showCheckoutModal: true,
    numberOfDecimals: 2,
      cartItems: [
      {id: 1, name: 'product 1', summary: 'summary 1', price: 55, quantity: 0, image: 'watchesW/1.jpg'},
      {id: 2, name: 'product 2', summary: 'summary 2', price: 88, quantity: 0, image: 'watchesW/2.jpg'},
      {id: 3, name: 'product 3', summary: 'summary 3', price: 45, quantity: 0, image: 'watchesW/img_3.jpg'},
      {id: 4, name: 'product 4', summary: 'summary 4', price: 58, quantity: 0, image: 'watchesW/img_4.jepg'},
      {id: 5, name: 'product 5', summary: 'summary 5', price: 100, quantity: 0, image: 'watchesW/img_5.jpg'},
      {id: 6, name: 'product 6', summary: 'summary 6', price: 110, quantity: 0, image: 'watchesW/img_6.jpg'},
      {id: 7, name: 'product 7', summary: 'summary 7', price: 50, quantity: 0, image: 'watchesW/img_7.jfif'},
      {id: 8, name: 'product 8', summary: 'summary 8', price: 120, quantity: 0, image: 'watchesW/img_8.png'},
      {id: 9, name: 'product 9', summary: 'summary 9', price: 45, quantity: 0, image: 'watchesW/img_9.jfif'},
      {id: 10, name: 'product 10', summary: 'summary 10', price: 100, quantity: 0, image: 'watchesW/img_10.jpg'},
      {id: 11, name: 'product 11', summary: 'summary 11', price: 88, quantity: 0, image: 'watchesW/img_11.jpg'},
      {id: 12, name: 'product 12', summary: 'summary 12', price: 58, quantity: 0, image: 'watchesW/img_12.jpg'},
      {id: 13, name: 'product 13', summary: 'summary 13', price: 35, quantity: 0, image: 'watchesW/img_13.jpg'},
     {id: 14, name: 'product 14', summary: 'summary 14', price: 45, quantity: 0, image: 'watchesW/img_14.jpg'},
      {id: 15, name: 'product 15', summary: 'summary 15', price: 95, quantity: 0, image: 'watchesW/img_15.jpg'},
      {id: 15, name: 'product 16', summary: 'summary 16', price: 115, quantity: 0, image: 'watchesW/img_16.jfif'},
      {id: 15, name: 'product 17', summary: 'summary 17', price: 33, quantity: 0, image: 'watchesW/img_17.jpg'},
      {id: 15, name: 'product 18', summary: 'summary 18', price: 56, quantity: 0, image: 'watchesW/img_18.jpg'},
      {id: 15, name: 'product 19', summary: 'summary 19', price: 52, quantity: 0, image: 'watchesW/img_19.jpg'},
      {id: 15, name: 'product 20', summary: 'summary 20', price: 63, quantity: 0, image: 'watchesW/img_20.jpg'},
    ],
    clickOnAddToCart: function($addTocart){
      goToCartIcon($addTocart);
    },
    afterAddOnCart: function(products, totalPrice, totalQuantity) {
      console.log("afterAddOnCart", products, totalPrice, totalQuantity);
    },
    clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
      console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
    },
    checkoutCart: function(products, totalPrice, totalQuantity) {
      var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
      checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
      $.each(products, function(){
        checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
      });
      alert(checkoutString)
      console.log("checking out", products, totalPrice, totalQuantity);
    },
    getDiscountPrice: function(products, totalPrice, totalQuantity) {
      console.log("calculating discount", products, totalPrice, totalQuantity);
     return totalPrice * 0.90;
    }
  });

  $("#addNewProduct").click(function(event) {
    var currentElementNo = $(".row").children().length + 1;
    $(".row").append('<div class="col-md-3 text-center"><img src="images/img_empty.png" width="150px" height="150px"><br>product ' + currentElementNo + ' - <strong>$' + currentElementNo + '</strong><br><button class="btn btn-danger my-cart-btn" data-id="' + currentElementNo + '" data-name="product ' + currentElementNo + '" data-summary="summary ' + currentElementNo + '" data-price="' + currentElementNo + '" data-quantity="1" data-image="images/img_empty.png">Add to Cart</button><a href="#" class="btn btn-info">Details</a></div>')
  });
});
