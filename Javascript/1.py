for x in range (1, 101): #loop through 1 to 100
    if x%15 == 0:
        print("FizzBuzz") #the output will be FizzBuzz when the number devisable by 15 
    elif x%5 == 0:
        print("Buzz") #the output will be Buzz when the number devisable by 5
    elif x%3 == 0:
        print("Fizz") #the output will be Fizz when the number devisable by 3
    else:
        print(x) #the output will be the number when it isn't devisable by 3, 5 and 15
    

def linearSearch(fruit, targetvalue): #to check if the target value matches the fruit in the fruit list
    for y in fruit:
        if y == targetvalue:
            return fruit.index(y)
fruit = ["apple", "banana", "cherry", "dragonfruit", "elderberry"] #list of the fruit
targetvalue = "cherry"
foundFruit = linearSearch(fruit, targetvalue)
print(foundFruit) 

