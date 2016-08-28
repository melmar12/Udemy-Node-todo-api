var Sequelize = require('Sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname + '/basic-sqlite-db.sqlite'
});

var Todo = sequelize.define('todo', {
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [1, 250]
		}
	},
	completed: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false

	}
});

sequelize.sync().then(function() {
	console.log('Everything is synced!');

	// Todo.create({
	// 	description: 'go to store',
	// 	completed: true
	// }).then(function(todo) {
	// 	return Todo.create({
	// 		description: 'call mom',
	// 		completed: true
	// 	});
	// }).then(function() {
	// 	// return Todo.findById(1);
	// 	return Todo.findAll({
	// 		where: {
	// 			//completed: false
	// 			description: {
	// 				$like: '%walk%'
	// 			}
	// 		}
	// 	});
	// }).then(function(todos) {
	// 	if (todos) {
	// 		todos.forEach(function(todo) {
	// 			console.log(todo.toJSON());
	// 		});
	// 	} else {
	// 		console.log('no bueno...');
	// 	}
	// }).catch(function(e) {
	// 	console.log(e);
	// });

	Todo.findAll({
		where: {
			description: {
				$like: '%walk%'
			}
		}
	}).then(function (todos) {
		if (todos) {
			todos.forEach(function (todo) {
				console.log(todo.toJSON());
			});
		} else {
			console.log('todo item not found');
		}
	});

});