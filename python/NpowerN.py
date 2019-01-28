from __future__ import print_function
Number = input("Enter the number how many times you want to multiply the same number with itself:")
Counter = int(1)
Result = int(1)
print ("Multiplying {0} with {1} times gives".format(Number , Number), end = ' ');
for Counter in range(1, int(Number)+1, 1):  
    Result = Result * int(Number)
print("{0}." .format(Result))

 