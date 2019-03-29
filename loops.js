function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if (i === 1){
      array.push('I am 1 strange loop.');
    }
    else{
      array.push("I am ${i} strange loops.");
      //array.push('I am ' + i +' strange loops');
      //array.push("I am 24 strange loops.");
      //console.log("I am ${i} strange loops.");
    }
  }
  return array;
}
//counts down from n to 0:
function whileLoop(n){
  while (n > 0){
    console.log(--n);         //countdown ()--n)
  }
    return 'done';

}
function doWhileLoop(num) {             //integer
  function incrementVariable(){
    i = i + 1;
  }
  do {
    console.log("I run once regardless.")
  }
  while(incrementVariable()< num);
}
