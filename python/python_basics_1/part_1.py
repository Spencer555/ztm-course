# int - integer 3,4,5 etc
# float - a floating point number 

#integers these are whole numbers 
print(3 + 4)
print(3 - 4)
print(3 * 4)
print(3 / 4)

# exponent
print(3**6)

# double divide - returns the rounded down of an integer divided by 4
print(2//4)#0


# modulus the remainder of the division 
print(5%4) #1

# to get the type of a datatype
# int
print(type(-5))
# float
print(type(0.5))

# a float takes more space in memory than int it stores in two different location 10.43 is one for 10 and one for 43



# math functions 



print(round(3.2))#round a number
print(abs(-3.4))# returns abosulte value no negetive num


# developer fundermentals 
# dont read the dictionary - dont try to learn everything or memorize instead understand what exist and what u can use and google it learn it by using it and focusing on the things that matter 



# operator precedence
# it same as bodmas
print((20-4) + 2** 2)
'''
it follows this order 
()
**
*/
+
'''



# extra datatype
# complex - a real number and an optional imaginary part 3+j but its rarely used 

# bin - binary it returns the binary representation of an int 
print('bin', bin(5)) #0b101 the 0b means binary whats after it is the value

# to convert from binary to int which is base 2
int('0b101', 2)


# variable 
# assigning values is the same as binding and its stored in memory as a binary representation of zeroes and ones

'''
rules of variable 
use snake_case 
are case sensitive 
dont overwrite keywords
letters, numbers and underscores
start variable with letter or underscore 
if u start with and underscore it signify a private variable
'''

'''
variable name should be descriptive
variables can be reassigned

if u see all caps its a constant and it should not be changed 
PI = 3.14


double underscore is dunder 
__ and should not be changed and should be left alone and dont create a variable begining with two underscores




a,b,c = 1,2,3
a is 1 b is 2 and c is 3

'''


# expressions vs statements 
iq = 100

# a statement is and entire line of code that perfoms an action so the entire line is a statement

user_age = iq /5 # and expression is this part of the code its a piece of code that produces a value 



# augumented assignment operator
some_vaue = 5
some_vaue = some_vaue + 2
# instead of doing the above we do this 
some_vaue += 2

# exercise

counter = 0 
counter +=1
counter +=1
counter +=1
counter +=1
counter -=1
counter *=2

print(counter)


# stings
'this is a string'
"this is also a string"
'''
this is
for long 
stings on multilines
'''

first_name = 'spencer'
last_name = 'lewis'

full_name = first_name + ' ' + last_name
print(full_name)


# string concatenation 
'hello' + ' Spencer'

# type conversion - converting one datatype to another


# escape sequence
# \t add a tab spacing 
# \n add a new line 
print('it\'s sunny')


# formatted sting 
name = 'spl'

# pyton 3
print(f'Hello there: {name}')


# python 2 
print('hi {}, you are {} years old'.format('johnny', 55))

# or
print('hi {1}, you are {0} years old'.format('100', 'redso'))

# sting indexes

strings = 'I am PYTHON'

strings[0]#t 

# slicing

# start to somewhere
# strings[start:stop] the last item in not read so u get 0,1
print(strings[0:2])
# strings[start:stop:stepover] the last item in not read so u get 0,2
print('stepover', strings[0:5:2]) 

# print to end from one to end 
strings[1:]

# from begining to 5
strings[:5]

# the default behaviour
strings[::1]

# negetive in python means start from behind 
strings[-1]

# reverse and order and u can skip by what u like -2  [::-2] from behind stepover two 
strings[::-1]

print('start')
print(strings[1:4])
print(strings[1:])
print(strings[:])#print everything
print(strings[1:100]) #same
print(strings[-1])
print(strings[-4])
print(strings[:-3])
print(strings[-3:]) #prints last 3 characters reversed
print(strings[::-1])



# immutability 
# stings in python are immutable they cant be changed so are tuples
# u can only reassign it u can change just part of it

# built in function and methods 
greet = 'hellooo'
# get length -> a built in function 
len(greet)

# to capitalize -> a built in method
greet.capitalize()

# find the first occurance of  a piece of text
greet.find('oo')

# boolean bool() -True or False 

# a program that guesses your age

birth_year = input('what year were you born: ')
current_year = 2024 

print('your current age is: ', current_year - int(birth_year))