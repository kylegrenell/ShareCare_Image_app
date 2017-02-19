import { Meteor } from 'meteor/meteor';

Images = new Mongo.Collection("images");
console.log( Images.find().count() );

if(Meteor.isServer){

Meteor.startup(() => {
  // code to run on server at startup
  console.log("I am the server")

    if(Images.find().count() == 0){
      Images.insert(
        {
          img_src: "tove.jpg",
          img_alt: "moomin"
        }
        );
      Images.insert(
        {
          img_src: "moomin2.jpg",
          img_alt: "moomin 2"
        }
        );
      Images.insert(
      {
        img_src: "moomin3.jpg",
        img_alt: "moomin 3"
      }
      );
    }
  });
}