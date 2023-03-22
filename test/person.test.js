import mocha from "mocha";
const { describe, it } = mocha;

import chai from "chai";
const { expect } = chai;

import Person from "../src/person.js";

describe("Person entity", () => {
  it("should return a person instance from a string", () => {
    const person = Person.generateInstanceFromString(
      "1 Carro,Moto 25000 2022-01-01 2022-12-31"
    );

    const expected = {
      id: "1",
      from: "2022-01-01",
      to: "2022-12-31",
      vehicles: ["Carro", "Moto"],
      kmTraveled: "25000",
    };

    expect(person).to.be.deep.equal(expected);
  });

  it("should format values", () => {
    const person = new Person({
      id: "1",
      from: "2022-01-01",
      to: "2022-12-31",
      vehicles: ["Carro", "Moto"],
      kmTraveled: "25000",
    });

    const result = person.formatted("pt-BR");
    const expected = {
      id: 1,
      from: "01 de janeiro de 2022",
      to: "31 de dezembro de 2022",
      vehicles: "Carro e Moto",
      kmTraveled: "25.000 km",
    };

    expect(result).to.be.deep.equal(expected);
  });
});
