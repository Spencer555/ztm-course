# commenting your code 
# your code should be self explantory and should read like english 
# the only time u add comments is where something complex is happening

# password checker 
username = input('Enter your username: ')
password = input('Enter your password: ')
password_length = len(password)
hidden_password = len(password) * '*'


print(f'hey {username}, password {hidden_password} is {password_length} letters long')

# lists 
# they are mutable and are forms of arrays
# a way for us to organize data or a container around your data with pros and cons for accessing, updating, removing etc
my_list = [1,2,3,4,5]
my_list_2 = ['a', 'b', 'c']


amazon_cart = [
    'notebooks',
    'sunglasses',
    'toys',
    'grapes'
    ]


amazon_cart[0] #first item 

#list slicing - with it we are creating a new copy not affecting original list if u set the old list to a new one and u edit the new list it affects the old one
# [start:stop:stepover]
print(amazon_cart)
print(amazon_cart[0:2])
print(amazon_cart[0::2])#all the way to the end but skip every second one

# list are mutable 
amazon_cart[0] = 'laptop'
print(amazon_cart)
print(amazon_cart[1:3])


# exercise - guess the output b4 u run 
new_list = ['a', 'b', 'c']
print(new_list[1])#b
print(new_list[-2])#b
print(new_list[1:3])#bc
new_list[0] = 'z'
print(new_list)#z b c

my_list = [1,2,3]
bonus = my_list + [5]
my_list[0] = 'z'
print(my_list)#z,2,3
print(bonus)#[1,2,3,5]

# matrix

matrix = [
    [1,2,3],
    [2,4,6],
    [7,8,9]
]

print(matrix[0][1])

# execises 

# using this list 
# access oranges and print it 

basket = ['Banana', ['Apples', ['Oranges'], 'Blueberries'], 4]

print(basket[1][1][0])


# list methods - a method is an action that is owned to something and its specific to a data type
len(basket) # get length of basket 


# add to end of list append does not return a new list9
basket.append('yams')

# insert at a specific index e.g. 2 it also does not return a new list
basket.insert(2, 100)


# extend - it takes an iterable (something u can loop over )e.g list
basket.extend([5,6,7])

# removing removes and returns the last item
basket.pop()

# remove item at index
# basket.pop(indexNum)
basket.pop(0)


# remove - it takes a value u want to remove it does not return new list
basket.remove(4)

# basket.index('Banana') # show the index of the item you are searching for 


# clear removes everything and does not return new list 
basket.clear()




# or 

# basket.index('d', 0, 2) # search for the index of 'd' starting from index of 0 to index of 2


# to check if something is in list 
# it can be used for stings and list etc
print('d' in basket)

# how many times an item appears in a basket
basket.count('d')


# sorts the list and does not return a new list
basket.sort()


# sorted is the same as .sort() but it returns a new array 

sorted(basket)

# copy - copies the list for us and returns a new list
basket.copy()


# reverse - revers the list and does not return a new list 
# it does not sort it it returns the reverse of it 
# so ur have to sort forist then reverse
basket.reverse()

# common list patterns 
# reverse a list - it returns a new list
print(basket[::-1])

# make a copy of list 
basket[:]

# generate a list quickly
list(range(1,100))

# .join() - works on strings it takes an iterable e.g list 
# this returns a new list - it joins by the items specified from list to string , it combines list to string
sentence = ''
sentence.join(['hi', 'my', 'name', 'is', 'JOJO'])
# himynameisJOJO


# a short hand way is 
' '.join(['this', 'is', 'me'])


# list unpacking - assing variables to list a is 1 b is 2 c is 3
a,b,c = [1,2,3]

d,e,f,*other, g = [4,5,6,7,8,9]
# d is 4, e is 5, f is 6, other is 7, 8 and g is 9


# None it rep the absense of value e.g null in other languages 


# exercise for list methods
your_basket = ['Banana', 'Apples', 'Oranges', 'Blueberries']

# remove banana from list 
your_basket.pop(0)
print(your_basket)

# remove blueberries from list 
your_basket.pop()
print(your_basket)

# put kiwi at end of list
your_basket.append('kiwi')
print(your_basket)

# add apples to beginning of the list 
your_basket.insert(0, 'Apples')
print(your_basket)


# count how many apples in the basket 
print(your_basket.count('Apples'))

# empty the basket 
your_basket.clear()
print(your_basket)


# fix this code so that it print a sorted list of all of our friends (alphabetically)

friends = ['Simon', 'Patty', 'Joy', 'Carrie', 'Amira', 'Chu']

new_friend = ['Stanley']

new_friends= friends + new_friend
new_friends.sort()

print(new_friends)