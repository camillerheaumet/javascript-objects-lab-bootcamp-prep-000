var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  recipes = object.assign(object,{[key]:value})
  return recipes
}