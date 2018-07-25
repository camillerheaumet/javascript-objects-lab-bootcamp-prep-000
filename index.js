var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object = object.assign({[key]:value})
  return object
}