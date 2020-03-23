show dbs
use customers
db.users.drop()

mongoimport --file /Users/mathisleroy-nivot/Downloads/users.json -d customers -c users --jsonArray --drop

/**
 * Update functions
 */
db.users.updateOne({age: 35}, {$set: { wallet: 200}})
db.users.updateMany({age: 35}, {$set: { wallet: 300}})
db.users.updateOne({age: 35}, {$inc: {age: -2}})
db.users.updateOne({_id : ObjectId("5e786308bd3848899035c2dd")}, {$inc: {age: 2}, $set: {field: value }})

db.users.updateOne({'name.first': 'Jeanine'}, {$unset: {wallet}})
db.users.updateOne({'name.first': 'Jeanine'}, {$unset: {favoriteFruit: '', company: ''}})

db.users.updateMany({}, {$rename: {tags: "favBooks"}})

db.users.updateOne({company: "Netflix"}, {$set: {company: "Netflix", email: "contact@netflix.com", isActive: true}})
db.users.updateOne({company: "Netflix"}, {$set: {company: "Netflix", email: "contact@netflix.com", isActive: true}}, {upsert: true})

db.users.find({$and:[{"hobbies.title": "Sports"}, {"hobbies.frequency":{$gte: 2 }}]}).pretty()
db.users.find({"hobbies": {$elemMatch: {title: "Sports", frequency: {$gte: 2}}}}).pretty()

db.users.updateMany({ "hobbies": { $elemMatch: { title: "Sports", frequency: { $lte: 2 } }}}, {$set: { "hobbies.$.minFrequency": 1 }})

db.users.find({ age: { $lte: 25 }}).count()
db.users.updateMany({age: {$lte: 25}}, {$inc: {"hobbies.$[].frequency": 1}})

db.users.updateMany({company: "GYNKO"}, {$push: {hobbies: {title: "Wine", frequency: 1}}})

db.users.updateMany({company: "GYNKO"}, {$push: {hobbies: {$each: [{title: "dev", frequency: 5}, {title: "Cooking", frequency: 2}]}}})
