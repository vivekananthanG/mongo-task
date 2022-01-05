db.movies.deleteMany({   rating:8.6 })

//O/p:
{ "acknowledged" : true, "deletedCount" : 1 }


db.movies.updateOne({name:"Jai Bhim"},{$set:{rating:9}})

//O/p:
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }