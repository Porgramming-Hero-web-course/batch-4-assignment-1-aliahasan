type Person = {
  name: string;
  age: number;
  email: string;
};

function getProperty<T, K extends keyof T>(person: T, property: K): T[K] {
  const propertyVal = person[property];
  return propertyVal;
}
const person: Person = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

const propertyValue = getProperty(person, "name");
