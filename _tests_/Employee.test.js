const Employee  = require("../lib/Employee");

//The first class is an `Employee` parent class with the following properties and methods:


describe("Employee class should have the following properties and methods", () => {
    //ATTRIBUTES - tests for attributes belonging to Employee

    it(`Key of name on employee object returns a matching string value`, () => {
      //Arrange
      const jediName = "Luke Skywalker"
      //Act
      const employee  = new Employee(jediName, 1, 'email@jedi.com')
      //expect
      expect((employee.name).toEqual("Luke Skywalker"));
    });

    
    it(`Key of id on employee object returns a matching number value`, () => {  
      //Arrange
      const jediName = "Luke Skywalker"
      //Act
      const employee  = new Employee(jediName, 1, 'email@jedi.com')
      //expect
      expect((employee.id).toEqual(1));
    });
  

    it(`Key of email on employee object returns a matching string value`, () => {
        //Arrange
        const jediEmail = 'email@jedi.com'
        const jediName = "Luke Skywalker"
        //Act
        const employee  = new Employee(jediName, 1, jediEmail)
        //expect
        expect((employee.email).toEqual('email@jedi.com'));
    });

  
    //METHODS - tests for methods belonging to Employee

    describe (`getName() method on employee class will reurn the name`, () => {
      //Arrange
      const jediName = "Luke Skywalker"
      //Act
      const employee  = new Employee(jediName, 1, 'email@jedi.com')
      //expect
      expect((employee.getName().toString()).toEqual("Luke Skywalker"));
    });

    describe(`getId()`, () => {
      //Arrange
      const jediName = "Luke Skywalker"
      //Act
      const employee  = new Employee(jediName, 1, 'email@jedi.com')
      //expect
      expect((employee.getID()).toEqual(1));
    });


    describe(`getEmail()`, () => {
      //Arrange
      const jediEmail = 'email@jedi.com'
      const jediName = "Luke Skywalker"
      //Act
      const employee  = new Employee(jediName, 1, jediEmail)
      //expect
      expect((employee.getemail()).toBe('email@jedi.com'));
    });
  
    describe(`getRole()`, () => {
      it("returns Employee", () => {
        //Act
        const employee  = new Employee(jediName, 1, jediEmail)
        //expect
        expect((employee.getrole()).toBe("Employee"));
      });
    });
  });








