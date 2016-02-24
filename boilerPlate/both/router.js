Router.configure({
  layoutTemplate: 'index'
});

Router.map(function() {
  this.route('home', {path: '/'})
  this.route('login', {path: '/login'}),
  this.route('register', {path: '/register'}),
});