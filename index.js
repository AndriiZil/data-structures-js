const arr = [1, 2, 3, 4, 4, 4, 6, 7, 10, 10, 12, 12, 12];

function countItem(arr) {
  let repeat = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num in repeat) {
      repeat[num] = repeat[num] + 1
    } else {
      repeat[num] = 1;
    }
  }

  for (let key in repeat) {
    console.log(`Number ${key} in repeat ${repeat[key]} times.`);
  }

}

countItem(arr);