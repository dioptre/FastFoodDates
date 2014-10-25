

Ember.Application.initializer({
  name: 'userapp',
  initialize: function(container, application) {
  	
  }
});

App = Ember.Application.create();

// App.ApplicationAdapter = DS.RESTAdapter.extend({
    // host: 'http://fastfooddates.com'
// });

App.ApplicationAdapter = DS.FixtureAdapter.extend({});

// App.Store = DS.Store.extend({
//   revision: 11,
//   url: "http://fastfooddates.com"
// });

App.Router.map(function() {
  this.route('login');
  this.route('profile');
  this.route('setup');
  this.route('confirmation');
  this.route('dates');
  this.route('proposals');
  this.route('slots');
  this.route('date');
});

App.User = DS.Model.extend({  	
  	photoURL: DS.attr('string'),
  	username: DS.attr('', {defaultValue: ''}),
  	firstname: DS.attr('', {defaultValue: ''}),
  	lastname: DS.attr('', {defaultValue: ''}),
	facebookID: DS.attr('', {defaultValue: ''}),
	locationLatitude: DS.attr('', {defaultValue: ''}),
	locationLongitude: DS.attr('', {defaultValue: ''}),
	isBuyer: DS.attr('', {defaultValue: ''}),
	isRecipient: DS.attr('', {defaultValue: ''}),
	email: DS.attr('', {defaultValue: ''}),
	meetups: DS.hasMany('meetup', { async: true })
});

App.Meetup = DS.Model.extend({
	locationLatitude: DS.attr('', {defaultValue: ''}),
	locationLongitude: DS.attr('', {defaultValue: ''}),
	address: DS.attr('', {defaultValue: ''}),
	date: DS.attr('', {defaultValue: ''}),
	time: DS.attr('', {defaultValue: ''}),
	state: DS.attr('', {defaultValue: ''}),
	buyer: DS.hasMany('meetup', { async: true }),
	recipient: DS.hasMany('meetup', { async: true })
});

App.Meetup.reopenClass({
  FIXTURES: [
    { id: 55, locationLatitude: '61.4', locationLongitude: '120.2', address: 'kfc down the road', time: '11:30', date: '01/01/2015', state: 'booked', buyer: 1, recipient: 2 },
    { id: 44, locationLatitude: '61.4', locationLongitude: '120.2', address: 'kfc up the road', time: '12:30', date: '01/01/2015', state: 'booked', buyer: 1, recipient: 3 },
  ]
});

App.User.reopenClass({
  FIXTURES: [
    { id: 1, photoURL: "http://x.com/x.jpg", username: 'dioptre', firstname: 'Andy', lastname: 'G', facebookID: 'mrdioptre', locationLatitude: '61.4', locationLongitude: '120.2', isBuyer: true, isRecipient: false, email: 'dioptre@gmail.com', meetups: [55,44] },
    { id: 2, firstname: 'Shirley' , lastname: 'H'},
    { id: 3, firstname: 'Michelle' , lastname: 'W'}
  ]
});




App.ProfileRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('user', 1);
	}
});

App.ProfileController = Ember.ObjectController.extend({
	
	actions: {
		makeBuyer: function () {
			this.set('model.isBuyer', true);
			this.set('model.isRecipient', false);
		},
		makeRecipient: function() {
			this.set('model.isBuyer', false);
			this.set('model.isRecipient', true);
		}
	}
});




// App.ArticleController = Ember.ObjectController.extend({
// 	// Title: function (key, value, previousValue) {
// 		// // setter
// 		// if (arguments.length > 1) {
// 		  // var title = this.get('model');
// 		  // title.set('title', value);
// 		  // title.save();
// 		// }

// 		// // getter
// 		// return this.get('model.title');
// 	// }.property('model.title'),
// 	// actions: {

// 	// }
// });
// App.ArticleRoute = Ember.Route.extend({
// 	beforeModel: function() {
// 		// $.get('/articles.php', function(data) {
// 			// App.articlesController.set('content', data);
// 		// });
// //	    Ember.run.scheduleOnce('sync', App, afterRenderEvent);

// 	},
// 	model: function() {
// 		return  this.store.findAll('article');
// 	}
// });

//DS.RESTAdapter.reopen({
  //buildURL: function(klass, id) {
  //if (id)
	//return '/' + klass + 's.php?id=' + id;
	//else
	//return '/' + klass + 's.php';
    // var urlRoot = Ember.get(klass, 'url');
    // if (!urlRoot) { throw new Error('Ember.RESTAdapter requires a `url` property to be specified'); }

    // if (!Ember.isEmpty(id)) {
      // return urlRoot + "/" + id;
    // } else {
      // return urlRoot;
    // }
  //}
//});



// App.ApplicationSerializer = DS.RESTSerializer.extend({
    // primaryKey: 'id',
    // serializeId: function(id) {
        // return id.toString();
    // }
// });

// App.Article = DS.Model.extend({
//   	title: DS.attr('string'),
//   	partners_firstname: DS.attr('', {defaultValue: ''}),
// 	dob: DS.attr('', {defaultValue: ''}),
// 	gender: DS.attr('', {defaultValue: ''}),
// 	date_moment: function (key, value, previousValue) {
// 		 if (arguments.length > 1) {
// 		  this.set('date_date', value.format("DD/MM/YYYY"));
// 		}
// 		if (moment(this.get('date_date'), ["DD/MM/YYYY"], true).isValid())
// 			return moment(this.get('date_date'), ["DD/MM/YYYY"]);
// 		else
// 			return '';
// 	}.property('date_date')
// });