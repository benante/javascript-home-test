function checkArguments(var1, var2) {
  if (var1 !== undefined && var2 !== undefined) {
    return true;
  }
  throw new Error("Error: missing argument");
}

function checkSameDataType(var1, var2) {
  if (typeof var1 !== typeof var2) {
    throw new Error(
      `Error, expected typeof ${typeof var1} but received typeof ${typeof var2}`
    );
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

// function assertEquals(var1, var2) {
//   if (!checkArguments(var1, var2)) {
//     throw new Error("Missing argument");
//   }
//   if (!checkSameDataType(var1, var2)) {
//     throw new Error(`Expect ${typeof var1}, received ${typeof var2}`);
//   }
// }
// assertEquals(2, "hekki");

export { comparePrimitives, checkArguments, checkSameDataType, compareArrays };
