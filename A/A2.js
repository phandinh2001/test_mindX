function myFunction(myArr) {
  let new_arr = Array.from(myArr);
  new_arr.sort((x, y) => {
    if  (y.GD != x.GD) return y.GD - x.GD;
    else if (y.points != x.points) return y.points - x.points;
    else {
      if (x.name < y.name) {
        return -1;
      }
      if (x.name > y.name) {
        return 1;
      }
      return 0;
    }
  });
  for (let i = 0; i < new_arr.length; i++) {
    for (let j = 0; j < myArr.length; j++) {
      if (myArr[j].name == new_arr[i].name) {
        myArr[j]["position"] = i + 1;
        break;
      }
    }
  }
  console.log(myArr);
  console.log(new_arr);
}
myFunction([
  { name: "Manchester United", points: 99, GD: 45 },
  { name: "Chelsea", points: 75, GD: 39 },
  { name: "Barcelona", points: 60, GD: 29 },
  { name: "Liverpool", points: 88, GD: 39 },
  { name: "Real madrid", points: 88, GD: 40 },
]);
