import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Images = new Mongo.Collection("images");
// console.log( Images.find().count() );

if(Meteor.isClient){
  console.log("I am the client");
  let img_data = [
  {
    img_src: "tove.jpg",
    img_alt: "moomin"
  },
  {
   img_src: "moomin2.jpg",
   img_alt: "moomin 2"
 },
 {
   img_src: "moomin3.jpg",
   img_alt: "moomin 3"
 }

 ];

 Template.images.helpers(
 {
  images: img_data
}
);

 Template.images.events({
  'click .js-image': function(e){
    // console.log(e);
    $(event.target).css("width", "50px");
  }
});

}

