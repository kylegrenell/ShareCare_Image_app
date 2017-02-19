if(Meteor.isServer){
  Meteor.startup(function(){

    if(Images.find().count() == 0){
      Images.insert(
        {
          img_src: "tove.jpg",
          img_alt: "moomin"
        }
        );

    }
  });
}