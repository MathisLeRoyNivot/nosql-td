<h1 align="center">NoSQL</h1>

## Commands
```javascript
// Create database
> use hobbies

// Create collection
> db.createCollection('sports')

// Insert data into created collection 'sports'
db.sports.insertMany([
    {category: 'Ball sport', createdAt: '1900-01-01', league: 'Rolland Garros'}, 
    {category: 'Ice sport', createdAt: '1900-01-01', league: 'NHL'}, 
    {category: 'Extreme sport', createdAt: '1900-01-01', league: 'XGames'}, 
    {category: 'Extreme sport', createdAt: '1900-01-01', league: 'NFL'}
])

// Add with upsert two new fields
db.sports.updateMany({}, {$set: {title: '', required_teams: true}}, {$upsert: true})

// Update
db.sports.updateOne({$and:[{category: 'Ball sport', league: 'Rolland Garros'}]}, {$set: {title: 'Tennis', required_teams: false}})
db.sports.updateOne({$and:[{category: 'Ice sport', league: 'NHL'}]}, {$set: {title: 'Ice Hockey'}})
db.sports.updateOne({$and:[{category: 'Extreme sport', league: 'XGames'}]}, {$set: {title: 'Ski', required_teams: false}})
db.sports.updateOne({$and:[{category: 'Extreme sport', league: 'NFL'}]}, {$set: {title: 'Football'}})

db.sports.updateMany({required_teams: true}, {$set: {number_of_teams: 0}})
db.sports.updateMany({required_teams: true}, {$inc: {number_of_teams: 10}})

db.sports.updateMany({required_teams: true}, {$push: {all_teams: {$each: [{name: "team1", number_of_players: 3},{name: "team2", number_of_players: 3}]}}})



```


## Contributor :computer:
- [Mathis Le Roy-Nivot](https://github.com/MathisLeRoyNivot "Go to @MathisLeRoyNivot's Github")

## License :white_check_mark:
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/MathisLeRoyNivot/ionic-training/blob/master/LICENSE) Mathis LE ROY-NIVOT 2020 ©