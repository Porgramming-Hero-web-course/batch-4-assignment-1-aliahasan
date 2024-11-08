interface Person1 {
  name: string;
  age: number;
  email: string;
  isAdmin?: boolean;
}

function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
  return keys.every((key) => key in obj);
}
const person1: Person1 = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

const results = validateKeys(person1, ["name", "age"]);
