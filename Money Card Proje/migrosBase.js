class migrosBase {
  discountRate = 20;
  constructor(firstName, lastName, customerCard, product) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.customerCard = customerCard;
    this.product = product;
  }
  calculate() {
    let amount = 0;

    if (this.productCheck(this.product)) {
      if (this.customerCard) {
        this.product.forEach((product) => {
          amount += (product.price * (100 - this.discountRate)) / 100;
        });
      } else {
        this.product.forEach((product)=>{
        amount += product.price;
      })
      }
    } else {
      alert("En az bir tane ürün satin almalisiniz.");
    }
    return amount;
  }
  productCheck(product) {
    if (product.length > 0 && product != null) {
      return true;
    }
    return false;
  }
}
