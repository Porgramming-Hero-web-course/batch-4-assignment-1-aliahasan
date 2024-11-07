interface Person {
  name: string;
  age: number;
  email: string;
}

const people: Person = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

function validateKeys(obj: Person, keys: (keyof Person)[]): boolean {
  return keys.every((key) => Object.keys(obj).includes(key as string));
}

const person = { name: "Alice", age: 25, email: "alice@example.com" };

const results = validateKeys(person, ["name", "age"]);
