function myFunction(a1,a2) {
  let joinArr = a1.concat(a2);
  let valuesToRemove  = [];
  let new_arr = [];
  for (let i = 0; i < joinArr.length; i++) {
    for (let j = i + 1; j < joinArr.length; j++) {
      if (joinArr[i] === joinArr[j]) {
        valuesToRemove.push(joinArr[j])
        new_arr = joinArr.filter(item => !valuesToRemove.includes(item));
      }
    }
  }
  console.log(new_arr)
}
myArr([1,2,3,4,5],[4,5,6,7,8]);
