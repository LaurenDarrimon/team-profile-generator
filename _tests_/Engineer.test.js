const Employee  = require("../lib/Employee");
const Engineer  = require("../lib/Engineer");

//In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

describe("Engineer class should have the following properties and methods", () => {
    //ATTRIBUTES - tests for attributes belonging to engineer

    it(`github username`, () => {
      //Arrange
      const jediName = "Luke Skywalker"
      //Act
      const employee  = new Engineer(jediName, 1, 'email@jedi.com')
      employee.gitHub = "yodaUser"
      //expect
      expect(employee.gitHub).toEqual("yodaUser");
    });

  
    //METHODS - tests for methods belonging to Engineer

    describe (`getGitHub() method on employee class will reurn the github username`, () => {
      //Arrange
      const jediName = "Luke Skywalker"
      //Act
      const employee  = new Engineer (jediName, 1, 'email@jedi.com')
      employee.gitHub = "yodaUser"
      //expect
      expect(employee.getGitHub().toString()).toEqual("yodaUser");
    });

  
    describe(`getRole()`, () => {
      it("previous role values overridden to returns Engineer", () => {
         //Arrange
        const jediEmail = 'email@jedi.com'
        const jediName = "Luke Skywalker"
        //Act
        const employee  = new Engineer(jediName, 1, jediEmail)
        //expect
        expect(employee.getRole()).toBe("Engineer");
      });
    });
  });