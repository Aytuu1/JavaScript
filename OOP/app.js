//? --------------- OOP (Nesneye Yönelik Programlama) -------------

// class Insan{
/*
           1 -> Özellikler
           2 -> Yapıcı Metot
           3 -> Function
        */
//     constructor(isim,soyisim,yas,maas){
//         this.isim=isim;
//         this.soyisim=soyisim;
//         this.yas=yas;
//         this.maas=maas;
//     }

// bilgileriGoster(){
//     console.log(`isim:${this.isim} Soyisim:${this.soyisim} Yas: ${this.yas} Maas:${this.maas}`);
// }

// }
// //!------------- Nesne oluşturmak --------------
// const insan1 = new Insan("Memmet","Tuncer","25",10000);
// const insan2 = new Insan("Ceren","Yılmaz","35",20000);

// insan1.bilgileriGoster();
// insan2.bilgileriGoster();

//? ------------- STATIC  NEDİR ? -------------

//! Bir function veya özellik static ise CLASS'a özgüdür.
//! değil ise nesneye özgüdür.

// class Matematik {
//     topla(a,b){
//         console.log(`Toplam: ${a+b}`)
//     }
//     cikar(a,b){
//         console.log(`Kalan: ${a-b}`)
//     }
//   static  carp(a,b){
//         console.log(`Çarpım: ${a*b}`)
//     }
//     böl(a,b){
//         console.log(`Bölüm: ${a/b}`)
//     }
// }

//! --- Static olarak tanımlanmamışsa nesne üzerinden erişilir.
// const matematik = new Matematik();
// matematik.topla(100,2);
// matematik.carp(10,2);

//! ---- Static olarak tanımlanmışsa class üzerinden erişilir.
// Matematik.cikar(100,3);
// Matematik.carp(10,2);

//? --------------- Inheritance (Kalıtım) -----------

class Person {
  constructor(firstName,lastName,salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;
  }
  writeInfo(){
        console.log(`İsim:${this.firstName} Soyisim:${this.lastName} Maaş: ${this.salary}`);
  }
}

class Student extends Person {
  constructor(firstName,lastName,salary){
        super(firstName,lastName,salary);
  }
  writeInfo(){
        super.writeInfo();
  }
}

const student1 = new Student("Burak","Belen",10000);
student1.writeInfo();
