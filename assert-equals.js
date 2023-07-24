function checkArguments(value1, value2) {
  if (value1 !== undefined && value2 !== undefined) {
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

export { checkArguments };
export { checkSameDataType };
