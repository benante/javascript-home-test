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

export { comparePrimitives, checkArguments, checkSameDataType };
