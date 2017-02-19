import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

if(Meteor.isClient){
  console.log("I am the client");
  let img_data = [
  {
    img_src: "tove.jpg",
    img_alt: "moomin",
    height: "300px"
  },
 {
   img_src: "moomin2.jpg",
   img_alt: "moomin 2",
   height: "400px"
 },
 {
   img_src: "moomin3.jpg",
   img_alt: "moomin 3",
   height: "400px"
 }

  ];

  Template.images.helpers({images: img_data});

}

