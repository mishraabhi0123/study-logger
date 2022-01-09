import moment from "moment-timezone";

function findByPk(modelName, id) {
	const objects = JSON.parse(localStorage.getItem(modelName)) || []
	return objects.find((object) => object.id === id);
}

function findAll(modelName, where = null) {
	let objects = JSON.parse(localStorage.getItem(modelName)) || []
	if (!where) {
		return objects
	}
	objects = objects.filter((object) => {
		for (let [key, value] of Object.entries(where)) {
			if (value instanceof Array) {
				if (moment(object[key]) < moment(value[0]) || moment(object[key]) > moment(value[1])) return false
			} else if (object[key] !== value) {
				return false
			}
			return true
		}
	})
	return objects
}

function create(modelName, object) {
	const newObject = {
		id: moment().valueOf(),
		...object,
		createdAt: moment(),
		updatedAt: moment(),
	}
	const objects = JSON.parse(localStorage.getItem(modelName)) || []
	objects.push(newObject);
	localStorage.setItem(modelName, JSON.stringify(objects))
	return objects;
}

function update(modelName, id, updatedObject) {
	let objects = JSON.parse(localStorage.getItem(modelName)) || []
	let requiredObject;

	objects = objects.filter((object) => {
		if (object.id === id) requiredObject = object
		return object.id === id
	});

	const newObject = {
		...requiredObject,
		...updatedObject,
		updatedAt: moment()
	}
	objects.push(newObject)
	localStorage.setItem(modelName, JSON.stringify(objects))
	return objects
}

function remove(modelName, id) {
	let objects = JSON.parse(localStorage.getItem(modelName)) || []
	console.log({ before: objects })
	objects = objects.filter(object => Number(object.id) !== Number(id))
	console.log({ after: objects })
	localStorage.setItem(modelName, JSON.stringify(objects))
	return objects
}

export {
	findByPk,
	findAll,
	create,
	update,
	remove,
}