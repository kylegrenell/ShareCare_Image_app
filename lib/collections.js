Images = new Mongo.Collection("images");

// set up security on images collection
Images.allow({
  insert:function(userId, doc){
    console.log("testing security on image insert");
    if(Meteor.user()){ // if user is logged in
      // console.log(doc);
      if(userId != doc.createdBy){ //user is messing about
        return false;
      }
      else {//user logged in, image has correct id
        return true;
      }
    }
    else { // user not logged in
      return false;
    }
  },
  remove:function(userId, doc){
    return true;
  }
})