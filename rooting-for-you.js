const judgeVegetable = function (vegetables, criteria) {
  let i = 0;
  let winner = "";

  vegetables.forEach((vegetable) => {
    if (i < vegetable[criteria]) {
      i = vegetable[criteria];
      winner = vegetable.submitter;
    }
  });
  return winner;
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));
