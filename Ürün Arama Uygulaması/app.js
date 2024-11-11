let urun1 = { isim: "Acer Swift", Kategori: "Teknoloji", fiyat: 6.227 };
let urun2 = { isim: "Acer Nitro 5", Kategori: "Teknoloji", fiyat: 7.227 };
let urun3 = { isim: "Lenovo V15", Kategori: "Teknoloji", fiyat: 10.227 };
let urun4 = { isim: "Lenovo V17", Kategori: "Teknoloji", fiyat: 11.227 };
let urun5 = { isim: "Apple Ideapad", Kategori: "Teknoloji", fiyat: 12.227 };
let urun6 = { isim: "Acer Ideapad", Kategori: "Teknoloji", fiyat: 13.227 };
let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];
let filtreUrunler = [];

let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz.");
filtreliUrunleriOlustur(urunler);
filtreUrunleriGetir(filtreUrunler);

function filtreliUrunleriOlustur(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase())) {
            filtreUrunler.push(urun);
        }
    });
}

function filtreUrunleriGetir(urunler) {
    urunler.forEach(function (urun) {
        console.log("|" + urun.isim + " | " + urun.fiyat + " | " + urun.Kategori);
    });
}