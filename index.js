function iterativeLog(array){
  array.forEach((element, index) => { console.log(`${index}: ${element}`) });
}

function iterate(callback){
  let array = ["what", "the", "fuck"];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback){
  array.forEach(callback)
}
