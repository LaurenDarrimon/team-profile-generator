const Employee  = require("../lib/Employee");
const Manager  = require("../lib/Manager");


//In addition to `Employee`'s properties and methods, `Manager` will also have the following:

describe("Manager class should have the following properties and methods", () => {
    //ATTRIBUTES - tests for attributes belonging to manager

    it(`Instances of manager class will have an office number`, () => {
      //Arrange
      const jediName = "Luke Skywalker"
      //Act
      const employee  = new Manager(jediName, 1, 'email@jedi.com');
      employee.office = "Red5"
      //expect
      expect(employee.office).toEqual("Red5");
    });

  
    //METHODS - tests for methods belonging to Manager
  
    describe(`getRole()`, () => {
      it("previous role values overridden to return Manager", () => {
         //Arrange
        const jediEmail = 'email@jedi.com'
        const jediName = "Luke Skywalker"
        //Act
        const employee  = new Manager (jediName, 1, jediEmail)
        //expect
        expect(employee.getRole()).toBe("Manager");
      });
    });
  });