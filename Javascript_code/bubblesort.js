//Mohammed Azad
//This is the implementation of the bubble sort in JavaScript
function bubbleSort(array){
    var i = 0;
    var j = 0;
    var holder = 0;
    for(i=0; i < array.length; i++) { 
        for(j=0; j < array.length - i - 1; j++) { 
            if(array[j] > array[j+1]) { 
                holder = array[j];
                array[j] = array[j+1];
                array[j+1] = holder;
            }
        }
    }
}
//creating the array and then printing out the array 
var array = [5, 6, 2, 7, 1, 234, 8];
console.log("This is the array before it is sorted: ");
console.log(array);
bubbleSort(array);
console.log("This is the sorted version of the array: ");
console.log(array);