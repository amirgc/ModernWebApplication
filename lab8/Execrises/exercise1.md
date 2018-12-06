//code from node js

1.  var query = {};
    db.collection("restaurants").find(query);

2. db.collection("restaurants")
      .find({}).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })

3. db.collection("restaurants")
      .find({}).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1,_id:0 })

4. db.collection("restaurants")
      .find({}).project({ restaurant_id: 1, name: 1, district: 1, zipcode: 1,_id:0 })

5. db.collection("restaurants")
      .find({district:"Bronx"})

6. db.collection("restaurants")
      .find({district:"Bronx"}).limit(5)

7.  db.collection("restaurants")
      .find({district:"Bronx"}).limit(5).skip(5)

8. db.collection("restaurants")
    .find({"address.coord":{$lt:-95.754168}})

9.  db.collection("restaurants")
      .find({
        cuisine: { $ne: "American" },
        "address.coord": { $lt: -65.754168 },
        "grades.score": { $gt: 70 }
      })

10. db.collection("restaurants")
      .find({name:{$regex:"^Wil"}})
      .project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })

11. db.collection("restaurants")
      .find({name:{$regex:"ces$"}})
      .project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })

12.  db.collection("restaurants")
      .find({name:{$regex:"Red"}})
      .project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })

13.  db.collection("restaurants")
      .find({district:"Bronx",cuisine:{$in:["American","Chinese"]}})

14.   db.collection("restaurants")
      .find({district:{$in:["Bronx","Brooklyn","Queens","Staten Island"]}})
      .project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })

15.   db.collection("restaurants")
      .find({district:{$nin:["Bronx","Brooklyn","Queens","Staten Island"]}})

16.   db.collection("restaurants")
      .find({"grades.score":{$lte:10}})
      .project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })

17.   db.collection("restaurants")
      .find({"address.coord.1":{$gt:42,$lte:52}})

18.  db.collection("restaurants")
      .find({})
      .sort({ name: 1 })

19.  db.collection("restaurants")
      .find({})
      .sort({ name: -1 })

20.  db.collection("restaurants")
      .find({})
      .sort({ cuisine: 1,district:-1 })

21. db.collection("restaurants")
      .find({"address.street":{$exists: true}})
  .count()

22. db.collection("restaurants")
      .find({"address.coord":{$type:"double"}})

23. db.collection("restaurants")
      .find({name: {$regex: "^Mad"}})
      .project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
  