#Mohammed Azad
#This is the implementation of the bubble sort using python

#making the array:
array = [1, 234, 43, 14, 1, 45, 7]

#making the function:
def bubbleSort(array):
    size = len(array)
    for i in range(size):
        for j in range(0,size-i-1):
            if array[j] > array[j+1]:
                holder = array[j]
                array[j] = array[j+1]
                array[j+1] = holder

#Running the sort
print("This is the array before it was sorted")
print(array)
bubbleSort(array)
print("This is the sorted array")
print(array)

