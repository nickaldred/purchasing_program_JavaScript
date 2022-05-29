
class Product {

    constructor(code, name, supplier, cost, rrp, pcsl, prsl){
        this.code = code;
        this.name = name;
        this.supplier = supplier;
        this.cost = cost;
        this.rrp = rrp;
        this.pcsl = pcsl;
        this.prsl = prsl;
    }


    printProduct(){
        console.log("Code: " + this.code);
        console.log("Name: " + this.name);
        console.log("Supplier: " + this.supplier);
        console.log("Cost: " + this.cost);
        console.log("RRP: " + this.rrp);
        console.log("PCSL: " + this.pcsl);
        console.log("PRSL: " + this.prsl);
    }

};

//Tester code

let newProduct = new Product("CS-2", "Converter Socket 2G", "CED", 2.50, 7.50, 2, 10);
