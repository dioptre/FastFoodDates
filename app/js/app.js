

Ember.Application.initializer({
  name: 'userapp',
  initialize: function(container, application) {
  	
  }
});

App = Ember.Application.create();


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

App.IndexRoute = Ember.Route.extend();

App.ArticleController = Ember.ObjectController.extend({
	// Title: function (key, value, previousValue) {
		// // setter
		// if (arguments.length > 1) {
		  // var title = this.get('model');
		  // title.set('title', value);
		  // title.save();
		// }

		// // getter
		// return this.get('model.title');
	// }.property('model.title'),
	// actions: {

	// }
});
App.ArticleRoute = Ember.Route.extend({
	beforeModel: function() {
		// $.get('/articles.php', function(data) {
			// App.articlesController.set('content', data);
		// });
//	    Ember.run.scheduleOnce('sync', App, afterRenderEvent);

	},
	model: function() {
		return  this.store.findAll('article');
	}
});

DS.RESTAdapter.reopen({
  buildURL: function(klass, id) {
  if (id)
	return '/' + klass + 's.php?id=' + id;
	else
	return '/' + klass + 's.php';
    // var urlRoot = Ember.get(klass, 'url');
    // if (!urlRoot) { throw new Error('Ember.RESTAdapter requires a `url` property to be specified'); }

    // if (!Ember.isEmpty(id)) {
      // return urlRoot + "/" + id;
    // } else {
      // return urlRoot;
    // }
  }
});

// App.ApplicationAdapter = DS.RESTAdapter.extend({
    // host: 'http://fastfooddates.com'
// });

// App.ApplicationSerializer = DS.RESTSerializer.extend({
    // primaryKey: 'id',
    // serializeId: function(id) {
        // return id.toString();
    // }
// });

App.Article = DS.Model.extend({
  	title: DS.attr('string'),
  	partners_firstname: DS.attr('', {defaultValue: ''}),
	dob: DS.attr('', {defaultValue: ''}),
	gender: DS.attr('', {defaultValue: ''}),
	date_moment: function (key, value, previousValue) {
		 if (arguments.length > 1) {
		  this.set('date_date', value.format("DD/MM/YYYY"));
		}
		if (moment(this.get('date_date'), ["DD/MM/YYYY"], true).isValid())
			return moment(this.get('date_date'), ["DD/MM/YYYY"]);
		else
			return '';
	}.property('date_date')
});



