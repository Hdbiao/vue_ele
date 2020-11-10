export default function arrTrans(arr, num) {
  let arrLength = arr.length;
  let newArr = [...arr]; // 返回一个新的数组
  let foodArr = [];
  for (let i = 0, j = 0; i < arrLength; i += num, j++) {
    foodArr[j] = newArr.splice(0, 8);
  }

  return foodArr
}