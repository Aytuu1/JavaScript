let message = `
Migros'a hoşgeldiniz..
Money Kartınız Var mı ?
1- Evet
2- Hayır
`;
const products = [
  {
    productName: "Süt",
    price: 15,
  },
  {
    productName: "Bebek Bezi",
    price: 100,
  },
  {
    productName: "Kuşbaşı",
    price: 200,
  },
];

let result = confirm(message);
let customerAmount;

if (result) {
  let name = prompt("Adınızı giriniz:");
  let surname = prompt("Soyadınızı giriniz:");

  const customer = new Customer(name, surname, result, products);
   customerAmount = customer.calculate();

  alert(`Müşteri bilgileri
           ${name} ${surname}
           Ödenecek tutar:${customerAmount}`);
} 
else {
  const customer = new Customer(null,null,result,products);
  customerAmount = customer.calculate();
  alert(`Ödenecek Tutar:${customerAmount}`);
}
