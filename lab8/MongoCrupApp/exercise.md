1.  var query = {};
    db.collection("restaurants").find(query);

2. db.collection("restaurants")
      .find({}).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })

3. db.collection("restaurants")
      .find({}).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1,_id:0 })