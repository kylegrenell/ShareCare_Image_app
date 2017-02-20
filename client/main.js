import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Images = new Mongo.Collection("images");

if(Meteor.isClient){
  console.log("I am the client");
  
 // Template.images.helpers({images: img_data});
 Template.images.helpers({images: 
  Images.find({}, {sort:{rating:-1}})
});

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

    //updating the mongodb collection
    Images.update(
      {_id:image_id}, 
      {$set: {rating:rating}});
  }
});
    
 Template.image_add_form.events({
  'submit .js-add-image':function(event){
    var img_src, img_alt;
    img_src = event.target.img_src.value;
    img_alt = event.target.img_alt.value;
    console.log("src: " + img_src + "alt: " + img_alt);

    Images.insert({
      img_src:img_src,
      img_alt:img_alt,
      createdOn: new Date()
    });

    return false;
    // stops the browser from default, which is to reload page
      }
    });


}

