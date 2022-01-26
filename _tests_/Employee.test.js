const Employee  = require("../lib/Employee");
const Engineer  = require("../lib/Engineer");
const Manager  = require("../lib/Manager");
const Intern  = require("../lib/Intern");

//The first class is an `Employee` parent class with the following properties and methods:


describe("Employee class", () => {
    
    //ATTRIBUTES - tests for attributes belonging to Employee
    it(`name returns a string`, () => {
      //Arrange
      //Act
      const employee = new Employee('Luke Skywalker', 1,'email@jedi.com');

      expect(employee.getName()).toEqual(expect.any(String));

      console.log(`Employee getName(): ${employee.getName()}`)

    });
    
    it(`id`, () => {
      expect(new Employee("a").visible).toBe(false); 
    });
  
    it(`email`, () => {
      expect(new Employee("a").toString()).toBe("_");
    });
  
    describe (`getName()`, () => {
      it("gets the name")  
      expect(new Employee("?").toString()).toBe("?");
    });


    //METHODS - tests for methods belonging to Employee
    describe(`getId()`, () => {
      it("gets the ID", () => {
        expect(new Employee().method(arg)).toBe(something);
      });
    });


    describe(`getEmail()`, () => {
      it("returns character", () => {
        expect(new Employee("l").getSolution()).toBe("l");
      });
    });
  
    describe(`getRole()`, () => {
    
      it("returns Employee", () => {
        expect(new Letter("l").getSolution()).toBe("l");
      });
    });
  });








