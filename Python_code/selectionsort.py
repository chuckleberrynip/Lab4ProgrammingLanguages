# Mohammed Azad
# This is the implementation of the selection sort using python 

array = [6, 4, 1, 3, 1,456]

def selectionSort(array):
    size = len(array)
    for i in range(size): 
        minHolder = i
        for j in range(i+1, size):
            if array[minHolder] > array[j]:
                minHolder = j
                
        holder = array[i]
        array[i] = array[minHolder]
        array[minHolder] = holder


print("This is the array before it is sorted:")
print(array)
print("This is the array after it is sorted")
selectionSort(array)
print(array)


