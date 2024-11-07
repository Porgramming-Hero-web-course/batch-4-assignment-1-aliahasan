type Person = {
  name: string;
  age: number;
};

function getProperty<T, K extends keyof T>(person: T, property: K): T[K] {
  const propertyVal = person[property];
  return propertyVal;
}
const person: Person = {
  name: "Alice",
  age: 30,
};

const propertyValue = getProperty(person, "name");
