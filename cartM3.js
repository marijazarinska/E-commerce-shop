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
        {id: 1, name: 'product 1', summary: 'summary 1', price: 30, quantity: 0, image: 'e10.jpg'},
        {id: 2, name: 'product 2', summary: 'summary 2', price: 15, quantity: 0, image: 'e1.png'},
        {id: 3, name: 'product 3', summary: 'summary 3', price: 25, quantity: 0, image: 'e2.png'},
        {id: 4, name: 'product 4', summary: 'summary 4', price: 30, quantity: 0, image: 'e3.jpg'},
        {id: 5, name: 'product 5', summary: 'summary 5', price: 40, quantity: 0, image: 'e4.jpg'},
        {id: 6, name: 'product 6', summary: 'summary 6', price: 90, quantity: 0, image: 'e5.jpg'},
        {id: 7, name: 'product 7', summary: 'summary 7', price: 70, quantity: 0, image: 'e6.png'},
        {id: 8, name: 'product 8', summary: 'summary 8', price: 55, quantity: 0, image: 'e7.png'},
        {id: 9, name: 'product 9', summary: 'summary 9', price: 80, quantity: 0, image: 'e8.png'},
        {id: 10, name: 'product 10', summary: 'summary 10', price: 35, quantity: 0, image: 'e11.jpg'},
        {id: 11, name: 'product 11', summary: 'summary 11', price: 40, quantity: 0, image: 'e12.jpg'},
        {id: 12, name: 'product 12', summary: 'summary 12', price: 50, quantity: 0, image: 'e13.jpg'},
        {id: 13, name: 'product 13', summary: 'summary 13', price: 60, quantity: 0, image: 'e14.jpg'},
        {id: 14, name: 'product 14', summary: 'summary 14', price: 30, quantity: 0, image: 'e15.jpg'},
        {id: 15, name: 'product 15', summary: 'summary 15', price: 35, quantity: 0, image: 'e16.jpg'},
	{id: 16, name: 'product 16', summary: 'summary 16', price: 40, quantity: 0, image: 'e17.jpg'},
	{id: 17, name: 'product 17', summary: 'summary 17', price: 75, quantity: 0, image: 'e18.jpg'},
	{id: 18, name: 'product 18', summary: 'summary 18', price: 60, quantity: 0, image: 'e19.jpg'},
	{id: 19, name: 'product 19', summary: 'summary 19', price: 50, quantity: 0, image: 'e20.jpg'},
	{id: 20, name: 'product 20', summary: 'summary 20', price: 20, quantity: 0, image: 'e9.jpg'},
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
 
})(jQuery);