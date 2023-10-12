const example = [
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"]];

const whereIsWaldo = (matrix) => {
  let waldo =matrix[0][0];
  let waldoRow=0;
  let waldoCol=0;
  let isStop = false;

  for (let row = 0; row < matrix.length; row++) { 
    for (let col = 0; col < matrix[row].length; col++) {
     if(waldo !=matrix[row][col])
      {
        waldo= matrix[row][col] ;
        waldoRow = row;
        waldoCol = col;
        isStop = true;
        break;
      }
      }
      if(isStop == true){
        break;
      }
     }

     console.log("Waldo is: " + waldo + " , [" + parseInt(waldoRow+1), ","+ parseInt(waldoCol+1)+"]")
}

whereIsWaldo(example);