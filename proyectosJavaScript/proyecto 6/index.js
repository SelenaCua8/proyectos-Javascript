const _private = new WeakMap(); //objeto



class Book {   //parecido a una function pero no retorna nada, solo tener variables(propiedades) y funciones(metodos)
    constructor(title, author, price) {
        
        const properties = { //objeto para las propiedades
            _title : title,
            _author : author,
            _price : price,

        }

        _private.set(this, {properties});
    }

    get title () {
        return _private.get(this).properties['_title'];
    } //obtiene el titulo del libro
     
    set title (newTitle) {
        return _private.get(this).properties['_title'] = newTitle;

    } //modifica el titulo del libro
      
    get author () {
        return _private.get(this).properties['_author'];
    } //obtiene el autor del libro
     
    set author (newAuthor) {
        return _private.get(this).properties['_author'] = newAuthor;

    } //modifica el titulo del libro
      
    get price () {
        return _private.get(this).properties['_price'];
    } //obtiene el autor del libro
     
    set price (newPrice) {
        return _private.get(this).properties['_price'] = newPrice;

    } //modifica el titulo del libro

    getAllData(){
        console.log(` Titulo: ${this.title}, Autor: ${this.author}. Precio: ${this.price}` );
    }
      


}

class Comic extends Book {
    constructor(name, author, price, illustrators) {
        super(name, author, price); //super hace ref a la clase padre
        this.illustrators = illustrators;
    }

    addIllustrator(newIllustrator = []){
        this.illustrators.push(newIllustrator); //para agregar una ilustracion despues
    }

    getAllData(){
        super.getAllData();
        console.log(` Illustrador: ${this.illustrators}` );g
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(amount, price){
        this.products.push( ...Array(amount).fill(price) ); //funcion para agregar productos

    }

    showProducts(){
        console.log(this.products ); // para mostrar los productos
    }

    calcTotal(){
        return this.products
        .map(price => price) //map ejecutar una funcion en cada uno de nuestros productos
        .reduce((ac, price) => ac + price, 0);
    }

    printTicket(){
        console.log(`Total a pagar ${this.calcTotal()}` )
    }
}
//encapsulacion se encagar de ocultar los detalles innecesarios para el exterior

//creación de primer objeto
const book1 = new Book('1984', 'G.o', 350);
const book2 = new Book('Frankestein', 'M.S', 200);

const comic1 = new Comic('The killinkg Joke', 'A.M', 150, ['B.B'] );

// console.log(book1._title); 
// console.log(book1._author);
// console.log(book1_price);

// console.log(book2._title); 
// console.log(book2._author);
// console.log(book2 _price);

/*console.log(comic1.author);
console.log(comic1.price);
console.log(comic1.illustrators);


comic1.addIllustrator('J.H'); // ahí agrego otro

console.log(comic1.illustrators);*/


const cart = new ShoppingCart();

cart.addProduct(2, comic1.price);

cart.addProduct(3, book1.price);

cart.showProducts();

cart.printTicket();

 // polimorfismo capacidad de realizar una misma accion de diferentes formas


 book1.getAllData();
 comic1.getAllData();