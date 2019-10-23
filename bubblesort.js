const swapLogic = {}

swapLogic.func = function (firstIdx, secondIdx) {
    if (firstIdx > secondIdx){
        return true
    }
    return false
}

const bubbleSort = array => {
  let duration = array.length - 1;
  while (duration > 0) {
    for (let i = 0; i < duration; i++) {
        let firstIdx = array[i]
        let secondIdx = array[i + 1];
        if (swapLogic.func(firstIdx, secondIdx)){
            let holder = array[i + 1];
            array[i + 1] = array[i]
            array[i] = holder
        }
    }
    duration--;
  }
  return array;
};
