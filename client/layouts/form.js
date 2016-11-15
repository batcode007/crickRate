Template.form.events({
	'click .submit': function(event){

		var name = Meteor.user().username;
		var id = Router.current().params._id;
		console.log("THIS.ID");
		console.log(id);
		console.log(name);
		// var x = messages.insert({
		// 	user1 : id,
		// 	user2 : Meteor.userId(),
  //           name: name,
  //           text : messag, 
  //           createdAt : new Date()
  //       });
		// event.target.msg.value='';
		return false;
	}
});