var database = [{
        username: 'spl',
        password: 'super_secRed'
    },
    {
        username: 'spl1',
        password: 'super_secRed1'
    },
    {
        username: 'spl2',
        password: 'super_secRed2'
    },
    {
        username: 'spl3',
        password: 'super_secRed3'
    },
    {
        username: 'spl4',
        password: 'super_secRed4'
    },
];

var newsfeed = [{
        username: "Bobby",
        timeline: "Stressed out but i need the bag"
    },
    {
        username: "Nipsey",
        timeline: "Don't grind dont eat and thats my moto"
    }
]



var userNamePrompt = prompt("What's your username? ")
var userPasswordPrompt = prompt("What's your password? ")



function signIn(username, password) {

    for (i in database) {
        if (username === database[i]['username'] && password === database[i]['password']) {
            return console.log(newsfeed)
        }
    }
    return alert('Invalid Credentials')

}




signIn(userNamePrompt, userPasswordPrompt)