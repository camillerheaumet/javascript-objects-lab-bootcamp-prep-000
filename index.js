var recipes = {eggs :3}

function updateObjectWithKeyAndValue(object, key, value) {
  recipes = Object.assign(object,{[key]:value})
  return recipes
}