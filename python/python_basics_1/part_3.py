# dictionary - in other languages its hash table, map or objects 
# its a datatype in python but also a datastructure 
# they are key value pairs the keys are used to grab the values
# they are unordered - meaning they are not next to each other in memory 
# u can also have a list of dictionaries
my_dict ={
    'key':'value',
    'b':'a'
    }


# developer fundermentals  
'''
understanding data structures
a good programmer is a one who understand what data structure to use use for each problem

when should u use a list and when should u use a dictionary
a list of people in line in your shop use list 
user playing a game use dictionary they hold more info than list 
a list has the index and the value only  
a dictionary holds a lot of info
# dictionary key needs to be immutable a key cannot change so u cant use list as key but u can use string, boolean, integer
a key in dictionary has to be unique else it would overwrite it
'''


user = {
    'basket':[1,2,3],
    'greet':'hello',
    'age':43
}

# to check if the key age exists
print(user.get('age'))

# if there is no age but u want a default value to return if age is not found 
print(user.get('age', 55))


# create an empty dictionary 
user2 = dict()

# create a user with name johnjohn
user3 = dict(name='JohnJohn')


# in - used to check if somethings is present in a dictionary 

print('age' in user)

# dictionary methods
# .keys()they check the keys of dictionary
# .value() they check the values of dictionary 
# .items() they grab the entire thing
print('age' in user)

print(user.keys())
print(user.values())
print(user.items())

# copy - copy a user 
user4 = user.copy()


# remove a key and value and returns it 
user.pop('age')

# removes the last value inserted 
user.popitem()

# update a key value if the key u specified does not exist it would add it
user.update({'age':53})


# clear - remove everything from dictionary it does not return a new list
user.clear()


# Exercise Dictionary Methods
# Scroll to see answers.

# 1 Create a user profile for your new game.
# This user profile will be stored in a dictionary with keys: 'age', 'username', 'weapons', 'is_active' and 'clan'

user_profile = {
    'age':24,
    'username':'spl',
    'weapons': None,
    'is_active':True ,
    'clan': 'Akan'
}

# 2 iterate and print all the keys in the above user.
print(user_profile.keys())

# 3 Add a new weapon to your user
user_profile['weapons'] = 'gun'
print(user_profile)

# 4 Add a new key to include 'is_banned'. Set it to false
user_profile['is_banned'] = False
print(user_profile)

# 5 Ban the user by setting the previous key to True
user_profile['is_banned'] = True
print(user_profile)

# 6 create a new user2 my copying the previous user and update the age value and username value.
user_profile2 = user_profile.copy()
user_profile2.update({'age':90, 'username':'esty'}) 
print(user_profile2) 



# tuples - they are more perfomant and faster than list

# they are like list but they are immutalbe

my_tuple = (1,2,3,4,5)

# to check if 5 is in tuple
print(5 in my_tuple)

# tuples can be also unpacked like list 
x,y,z, *other = (1,2,3,4,5)

print(other)

# tuple methods 

# count - how many times a value occurs in the tuple 
my_tuple.count(5)


# index - get the index of value 
my_tuple.index(5)


# sets - they are unorded collections of unique objects 

my_set = {1,2,3,4,5,6,7}



# execise 
# take this array and return the array without duplicates

my_dict = [1,2,3,4,5,5]

new_list = list(set(my_dict))

print(new_list)



# set methods 


# add a 100 if its not already in list
my_set.add(100)

# sets are access by the value
# my_set[3]


# set methods

# copy - copy the set
my_set.copy()


# clear - clears the set 
my_set.clear()

my_set1 = {1,2,3,4,5}
your_set = {4,5,6,7,8,9,10}

# venn diagram 

# .difference - finds the difference between the sets so any duplicates get ignored and only shows the difference
my_set1.difference(your_set)

# .dicard removes and element from a set if its a member
my_set1.discard(5)


# difference_update - removes all elements from another set from your set 
my_set1.difference_update(your_set)


# intersection - show items in both sets 
# short hand (my_set1 & your_set)
my_set1.intersection(your_set)

# isdisjoint returns true if the two sets have no intersections or do they have anything in common
my_set1.isdisjoint(your_set)


# union - combine both sets 
# short hand is (my_set1 | your_set)
my_set1.union(your_set)

# issubset - is your_set a subset of my_set1 returns true or false
# is your_set in my_set1
my_set1.issubset(your_set)


# issuperset -returns true if my_set1 is a superset of your_set
my_set1.issuperset(your_set)


# exercise
# You are working for the school Principal. We have a database of school students:
school = {'Bobby','Tammy','Jammy','Sally','Danny'}

#during class, the teachers take attendance and compile it into a list. 
attendance_list = ['Jammy', 'Bobby', 'Danny', 'Sally']


#using what you learned about sets, create a piece of code that the school principal can use to immediately find out who missed class so they can call the parents. (Imagine if the list had 1000s of students.
# The principal can use the lists generated by the teachers + the school database to use python and make his/her job easier): Find the students that miss class!
missed_class = school.difference(attendance_list)
print(missed_class)


 


