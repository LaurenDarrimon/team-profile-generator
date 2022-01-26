const Employee  = require("../lib/Employee");
const Intern  = require("../lib/Intern");


//In addition to `Employee`'s properties and methods, `Intern` will also have the following:


describe("Intern class should have the following properties and methods", () => {
    //ATTRIBUTES - tests for attributes belonging to intern

    it(`Intern objects have intern school name attribute`, () => {
      //Arrange
      const jediName = "Luke Skywalker"
      //Act
      const employee  = new Intern(jediName, 1, 'email@jedi.com')
      employee.school = "hard knocks"
      //expect
      expect(employee.school).toEqual("hard knocks");
    });

  
    //METHODS - tests for methods belonging to Engineer

    describe (`getSchool() method on intern class will reurn the name of the school`, () => {
      //Arrange
      const jediName = "Luke Skywalker"
      //Act
      const employee  = new Intern (jediName, 1, 'email@jedi.com')
      employee.school = "hard knocks"
      //expect
      expect(employee.getSchool().toString()).toEqual("hard knocks");
    });

  
    describe(`getRole()`, () => {
      it("previous role values overridden to return Intern", () => {
         //Arrange
        const jediEmail = 'email@jedi.com'
        const jediName = "Luke Skywalker"
        //Act
        const employee  = new Intern (jediName, 1, jediEmail)
        //expect
        expect(employee.getRole()).toBe("Intern");
      });
    });
  });