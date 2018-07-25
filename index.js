var recipes = {eggs :3}

function updateObjectWithKeyAndValue(object, key, value) {
  recipes = Object.assign(object,{[key]:value})
  return recipes
}

function updateObjectWithKeyAndValue(object, key, value) {
  recipes = Object.assign({},object,{[key]:value})
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes = Object.assign(object,{[key]:value})
  return recipes  
}

function deleteFromObjectByKey(object, key) {
  delete recipes
}