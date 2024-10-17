# conditional logic

is_old = True 
is_licenced = True 

if is_old and is_licenced:
    print('you can drive now')
    
elif is_licenced:
    print('u can also drive')
else:
    print('you are not old enough')
    
print('check')


# truthy and falsy

# is using type convertion to convert to true or false
age = 5 # bool(age) returns true 
name = ' ' #bool(name) returns false


# tenary operator or conditional expression - it an operation that evaluates to something based on the condition being true or not
# condition_if_true if condition else condition_if_false

is_wise = True 

results = 'spencer is the greatest to do it' if is_wise else 'edith dey stress me'
print(results)

# logical operators - allows us to perform logic between two things
'''
and 
or 
not 
>
<
<=
>=
==
!= - not equal to
'''


# exercise
is_magician = False
is_expert = True 

# check if magician and expert if true print you are a master magician 

# check if magician but not expert print at least you are getting there


# if you are not a magician you need magic powers

if is_magician and is_expert:
    print('you are a master magician')
    
elif is_magician and not is_expert:
    print('at least you are getting there')
else:
    print('you need magic powers')
    
# == checks for equality of value
print(True == 1)#true 
print('' == 1)#false
print([] == 1)#false
print(10 == 10.0)#true
print([] == [])#true


# is checks for if the location in memory where the value is stored is the same
print(True is 1)#true 
print('' is 1)#false
print([] is 1)#false
print(10 is 10.0)#true
print([] is [])#true


# loops
# the item is a variable we create to use to iterate the loop
# and iterable is something that can be looped over so anything after the in is and iterable 
for item in 'Zero to Mastery':
    print(item)
    
    
    
for i in (1,2,3,4,5):
    print(i)
    
    
# iterable - an object or collection that can be iterated over 
# list, sting, dictionary, tuple, set
# iterated -> we can go one by one to check each item in the collection


user = {
    'name':'Golem',
    'age':5006,
    'can_swim':False
}

for key, value in user.items():
    print(key, value)
    
    
for item in user.values():
    print(item)
    
    
for item in user.keys():
    print(item)
    
    
# exercise 
my_list = [1,2,3,4,5,6,7,8,9,10] 


counter = 0

for num in my_list:
    counter += num 
    
print(counter)


# range()
for number in range(100):
    print(number)
    
# or u can use underscore if u dont care what the variable it to 
# the 3rd argument is a stepover 
for _ in range(0, 10, 2):
    print(_)
    
    
# to print in reverse 
for _ in range(10, 0, -1):
    print(_)
    

# a quick way to create a list of 10 items
for _ in range(2):
    print(list(range(10)))
    
    
# enumerate - it returns an enumerate obj index counter and value

for i, char in enumerate('Helloooo'):
    print(i,char)
    
    
# exercise 
# create a script that enumerate a list of numbers 1 to 100 and be told what the index of 50 is

for i, char in enumerate(list(range(100))):
    if char == 50:
        print(f' the index of 50 is {i}')
        break
    
    
# while loop - a while loop must always have a stop clause else it would be an infinite loop

# while condition:
#     do something

# u only use else if u dont break out
i = 0
while i < 50:
    i+=1
    print(i)
    
'''
when to use a while loop and for loop 
for simple loops  or iterating over simple objects for loops are great 

but u are not sure how many times you want to loop over something 
use while loop or when gathering input  and break out   
'''

while True:
    input('say something: ')
    break


# continue go back to the top of enclosing loop
# break - break out of loop
# pass- it does nothing it used as a placeholder for incomplete functions or loop 

while i < 5:
    print('this is a boy')
    i+=1
    continue
 
 
# our first gui
# loop over this and when u encounter a zero display an empty space when u see a 1 display *
picture = [
    [0,0,0,1,0,0,0],
    [0,0,1,1,1,0,0],
    [0,1,1,1,1,1,0],
    [1,1,1,1,1,1,1],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
]

# loop thru the list 
# replace 0 with space 
# replace 1 with * 



fill = '*'
empty = ' '
for row in picture:
    for pixel in row:
        if pixel:
            print(fill, end='')
        else:
            print(empty, end='')
        
    print('') 
    
    
# developer fundermentals
# clean 
# readability
# predictability
# dry - dont repeat yourself


# exercise 
# check for duplicates in a list 

some_list = ['a', 'b', 'c', 'b', 'd', 'm', 'n', 'n']


# loop thru the list
# get the count of each element 
# if greater than one return 

duplicates = []
for item in some_list:
    
    if some_list.count(item) > 1:
        if item not in duplicates:
            duplicates.append(item)
print(duplicates)


# functions
def say_hello():
    print('hello there')
    
    
say_hello()

# arguments vs parameters

# parameters - used when we define the function 
def say_hi(name, age):
    print(f'Hello {name} your are {age} years old')
    
    
# arguments are used with we call or invoke the function 
say_hi('sdf', 09)


