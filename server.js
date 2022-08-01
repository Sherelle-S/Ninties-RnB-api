const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const Group = {
    'Jodeci':{
        'number of members': 4,
        'start date': 1989,
        'number of official albums released': 4,
        'members names': ['Donald "DeVanté Swing" DeGrate','Dalvin "Mr. Dalvin" DeGrate','Cedric "K-Ci" Hailey','Joel "JoJo" Hailey']
        },
    
    'Boys II Men':{
        'number of members': 4,
        'start date': 1988,
        'number of official albums released': 13,
        'members names': ['Nathan Morris','Shawn Stockman','Wanya Morris'],
        'former members': ['Michael McCary','Marc Nelson'],
    },

    'Shai':{
        'number of members': 4,
        'start date': 1991,
        'number of official albums released': 4,
        'members names': ['Darnell Van Rensalier','Garfield A. Bright','Carl Martin'
,'Marc Gay'],
    },

    'Silk':{
        'number of members': 5,
        'start date': 1989,
        'number of official albums released': 7,
        'members names': ['Tim "Timzo" Cameron','Jimmy Gates','Gary "Big G" Glenn','Johnathen "John-John" Rasboro','Gary "Lil G" Jenkins']
    },
    '112':{
        'number of members': 4,
        'start date': 1993,
        'number of official albums released': 7,
        'members names': ['Reginald Finley','Aldon Lagon','Quinnes "Q" Parker','Daron Jones']
    },
    'Dru Hill':{
        'number of members': 4,
        'start date': 1992,
        'number of official albums released': 4,
        'members names': ['Mark "Sisqó" Andrews','Tamir "Nokio" Ruffin','Larry "Jazz" Anthony','James "Woody" Green']
    },
    'Tony! Toni! Toné!':{
        'number of members': 3,
        'start date': 1980,
        'number of official albums released': 4,
        'members names': ['D"wayne Wiggins','Raphael Saadiq','Timothy Christian Riley']
    },
    'Immature':{
        'number of members': 3,
        'start date': 1990,
        'number of official albums released': 7,
        'members names': ['Marques "Batman" Houston ','Jerome "Romeo" Jones','Kelton "LDB" Kessee']
    },

    'H-Town':{
        'number of members': 3,
        'start date': 1990,
        'number of official albums released': 5,
        'members names': ['Solomon “Shazam" Conner','Solomon “Shazam" Conner','Darryl "G.I." Jackson']
    },


}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const GroupName = request.params.name.toLowerCase()
    if(Group[GroupName]){
        response.json(Group[GroupName])
    }else{
        response.json(Group['unknown'])
    
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! BEtter go catch it`)
})