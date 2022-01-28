const Employee = require("../assets/Employee");
const Intern = require("../assets/Intern");

describe("Intern class", () => {
  const intern = new Intern("Raymond Estrada", 19, "raymond.estrada@new.com", "The Art Institute of Seattle");
  
  it("is a subclass of the Employee class", () => {
    expect(intern).toBeInstanceOf(Employee);
  });

  describe("getName", () => {
    it("should return the intern's name", () => {
      expect(intern.getName()).toEqual(intern.name);
    });
  });

  describe("getId", () => {
    it("should return the intern's ID", () => {
      expect(intern.getId()).toEqual(intern.id);
    });
  });

  describe("getEmail", () => {
    it("should return the intern's email address", () => {
      expect(intern.getEmail()).toEqual(intern.email);
    });
  });

  describe("getSchool", () => {
    it("should return the name of the intern's school", () => {
      expect(intern.getSchool()).toEqual(intern.school);
    });
  });

  describe("getRole", () => {
    it('should return "Intern"', () => {
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});