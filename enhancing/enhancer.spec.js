const { succeed, fail, repair, get, isNumber } = require("./enhancer.js");

// test away!

it("should run the tests", function() {
  expect(true).toBe(true);
});

it("expect a number?", function() {
  expect(isNumber("asdf")).toBe(false);
});

//ENHANCER FILE
describe("enhancer.js", function() {
  //REPAIR FUNCTION
  describe(".repair()", function() {
    it("should return item durability as 100", function() {
      let blade_of_grass1 = {};
      blade_of_grass1.durability = 50;
      const repaird = repair(blade_of_grass1);

      expect(repaird.durability).toBe(100);
    });
  });

  //SUCCEED FUNCTION
  describe(".succeed()", function() {
    it("should throw an error for succeed", function() {
      let blade_of_grass2 = {};
      blade_of_grass2.enhancement = 20;

      expect(() => {
        succeed(blade_of_grass2);
      }).toThrow();
    });

    it("should enhance item to 20 with succeed", function() {
      let blade_of_grass3 = {};
      blade_of_grass3.enhancement = 19;
      const enhancd = succeed(blade_of_grass3);

      expect(enhancd.enhancement).toBe(20);
    });

    it("should enhance item to 6 with succeed", function() {
      let blade_of_grass4 = {};
      blade_of_grass4.enhancement = 5;
      const enhancd = succeed(blade_of_grass4);

      expect(enhancd.enhancement).toBe(6);
    });

    it("should throw error because of NaN", function() {
      let blade_of_grass5 = {};
      blade_of_grass5.enhancement = NaN;

      expect(() => {
        succeed(blade_of_grass5);
      }).toThrow();
    });

    it("should throw error because NaN", function() {
      let blade_of_grass6 = {};
      blade_of_grass6.enhancement = "asdf";

      expect(() => {
        succeed(blade_of_grass6);
      }).toThrow();
    });

    it("should throw error because NaN", function() {
      let blade_of_grass7 = {};
      blade_of_grass7.enhancement = [];

      expect(() => {
        succeed(blade_of_grass7);
      }).toThrow();
    });
  });

  //FAIL FUNCTION
  describe(".fail()", function() {
    it("should return -5 durability(45) for item fail because enhancement level is < 15", function() {
      let shield = {};
      shield.durability = 50;
      shield.enhancement = 10;
      const newItem = fail(shield);

      expect(newItem.durability).toBe(45);
    });

    it("should return -10 durability(40) for item fail because enhancement level is 15", function() {
      let shield = {};
      shield.durability = 50;
      shield.enhancement = 15;
      const newItem = fail(shield);

      expect(newItem.durability).toBe(40);
    });

    it("should return -10 durability(40) AND -1 enhancement(15) for item fail because enhancement level is > 15", function() {
      let shield = {};
      shield.durability = 50;
      shield.enhancement = 17;
      const newItem = fail(shield);

      expect(newItem.durability).toBe(40);
      expect(newItem.enhancement).toBe(16);
    });

    it("should throw because durability is NaN", function() {
      let shield = {};
      shield.durability = NaN;
      shield.enhancement = 14;

      expect(() => {
        fail(shield);
      }).toThrow();
    });

    it("should throw because enhancement is NaN", function() {
      let shield = {};
      shield.durability = 50;
      shield.enhancement = NaN;

      expect(() => {
        fail(shield);
      }).toThrow();
    });
  });
});
