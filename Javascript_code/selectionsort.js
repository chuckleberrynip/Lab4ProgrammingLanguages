//Mohammed Azad
//This is the implementation of the selection sort in javaScript
function selectionSort(array) { 
    var size = array.length;
    for(var i=0; i < size; i++) { 
        var min = i;
        for(var j=i+1; j < size; j++) { 
            if(array[min] > array[j]) { 
                min = j;
            }
        }
        var holder = array[min];
        array[min] = array[i];
        array[i] = holder;
    }
}
var array = [34, 23, 1345, 7, 123, 6];
console.log("This is the array before being sorted:");
console.log(array);
selectionSort(array);
console.log("This is the array after being sorted:");
console.log(array);
