import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Images = new Mongo.Collection("images");
// console.log( Images.find().count() );

if(Meteor.isClient){
  console.log("I am the client");
  
 // Template.images.helpers({images: img_data});
 Template.images.helpers({images: Images.find()});

 Template.images.events({
  'click .js-image': function(e){
    // console.log(e);
    $(event.target).css("width", "50px");
  },

  'click .js-del-image':function(e){
    var image_id = this._id;
    console.log(image_id);
    // jquery hide function easier to see deleteion for user
    $("#" + image_id).hide('slow', function(){
      Images.remove({"_id":image_id});
    })
  },

  'click .js-rate-image':function(event){
    var rating = $(event.currentTarget).data('userrating');
    // userrating is the object within the data
    console.log(rating);
    var image_id = this.id;
    console.log(image_id);
  }

});

}

