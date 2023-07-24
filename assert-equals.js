function checkArguments(var1, var2) {
  if (var1 !== undefined && var2 !== undefined) {
    return true;
  }
  return false;
}

function checkSameDataType(var1, var2) {
  if (typeof var1 !== typeof var2) {
    return false;
  }
  return true;
}

function comparePrimitives(var1, var2) {
  if (var1 === var2) {
    return true;
  }
  return false;
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

compareArrays([1, 2, 3], [1, 2, 3]);

export { comparePrimitives, checkArguments, checkSameDataType, compareArrays };
