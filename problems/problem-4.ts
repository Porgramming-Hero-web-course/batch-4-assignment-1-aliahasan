type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

function calculateShapeArea(shape: Circle | Rectangle): number {
  if (shape.shape === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  }
  throw new Error("Invalid shape type");
}

const circleArea = Number(
  calculateShapeArea({ shape: "circle", radius: 12 }).toFixed(2)
);
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
