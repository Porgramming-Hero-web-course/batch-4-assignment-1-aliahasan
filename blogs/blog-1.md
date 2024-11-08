# The significance of union and intersection types in Typescript

TypeScript provides two powerful ways to combine types: **Union Types** and **Intersection Types**. Each serves a different purpose, and understanding them can help us write more flexible and reusable code.

---

## 1. Union Types (`|`)

A **Union Type** allows a variable to hold one of several possible types. Think of it as saying, "This can either one type or another."

### Example of Union Types

Let's say we have a function that accepts either a **string** or a **number** as input:

```typescript
function printId(id: string | number) {
  console.log("ID:", id);
}

printId(101); // here id is a number
printId("AB123"); // here  id is a string
```

In the example above, the printId function works with both string and number inputs, making it flexible for different types of IDs.

## 2. Intersection Types (`&`)

B **Intersection types** let us combine multiple types into one. It’s like saying, "this has to be both type A and type B."

### Example of Intersection Types

```typescript
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type PersonEmployee = Person & Employee;
Here, PersonEmployee is an intersection type of Person and Employee. This means it must have all the properties from both types.

// usage example
const personEmployee: PersonEmployee = {
  name: "Alice",
  age: 30,
  employeeId: 12345,
  department: "Developer",
};
```

This object is valid because it includes the properties from both Person and Employee.
