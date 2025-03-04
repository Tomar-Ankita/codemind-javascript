
class Bike {
    constructor(brand, model, year, color, price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
    }

    logDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: ${this.price}`);
    }
    
}
const bike1 = new Bike("Yamaha", "R15", 2023,"Black" ,35000);
const bike2 = new Bike("Honda", "Activa", 2022,"Black" ,4100);
const bike3 = new Bike("Royal Enfield", "Classic 350",2023, "Black",100000);
const bike4 = new Bike("Suzuki", "Access 125", 2021,"Red" ,2700);
const bike5 = new Bike("KTM", "Duke 390", 2024,"Orange", 95000);



bike1.logDetails();
bike2.logDetails();
bike3.logDetails();
bike4.logDetails();
bike5.logDetails();



class College {
    constructor(name, city, university, courses) {
        this.name = name;
        this.city = city;
        this.university = university;
        this.courses = courses;
    }

    display() {
        console.log(`College Name: ${this.name}, city: ${this.city}, university: ${this.university}, Courses Offered: ${this.courses.join(", ")}`);
    }
}
console.log("===============================================================================================================================");


const college1 = new College("DAV", "Abohar", "PUCHD", ["Engineering", "Business", "Science","Arts"]);
const college2 = new College("Maharaja Aggrasen", "Ferozpur","PUCHD", ["Computer Science", "Medicine", "Law"]);
const college3 = new College("Symboisis College", "Pune", "COEP",["Biotech", "Finance", "Psychology"]);
const college4 = new College("Khalsa college", "Ganganagar", "PUCHD", ["AI & ML", "Data Science", "Cybersecurity"]);


college1.display();
college2.display();
college3.display();
college4.display();
