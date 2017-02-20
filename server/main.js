import { Meteor } from 'meteor/meteor';

Images = new Mongo.Collection("images");
console.log( "Images in database: " + Images.find().count() );

if(Meteor.isServer){

  Meteor.startup(() => {
  // code to run on server at startup
  console.log("Server is up and running...")

  if(Images.find().count() == 0){

  for(var i = 1; i < 23; i++){
    Images.insert({
      img_src: "img_" + i + ".jpg",
      img_alt: "image number" + i
    });
  } 
}
});
}