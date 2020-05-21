const moves = [
  ["north"],
  ["north"],
  ["west"],
  ["west"],
  ["north"],
  ["east"],
  ["north"],
];

function finalPosition(moves) {
  let position = [0, 0];

  for (let i = 0; i < 4; i++) {
    if (moves === "north") {
      position[1] + 1;
    } else if (moves === "south") {
      position[1] - 1;
    } else if (moves === "east") {
      position[0] + 1;
    } else if (moves === "west") {
      position[0] - 1;
    }
  }
  return position;
}
console.log(finalPosition());
