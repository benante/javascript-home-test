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
  if (var1 !== var2) {
    throw new Error(`Error, expected "${var1}" but received "${var2}"`);
  }
  return true;
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    throw new Error(
      `Error, expected array length ${array1.length} but received ${array2.length}`
    );
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      throw new Error(
        `Error, expected "${array1[i]}" but received "${array2[i]}"`
      );
    }
  }

  return true;
}

function assertEquals(var1, var2) {
  if (checkArguments(var1, var2) && checkSameDataType(var1, var2)) {
    if (typeof var1 === "object") {
      compareArrays(var1, var2);
    } else {
      comparePrimitives(var1, var2);
    }
    return true;
  }
  return false;
}
assertEquals([2, 8], [2, 8]);

export {
  comparePrimitives,
  checkArguments,
  checkSameDataType,
  compareArrays,
  assertEquals,
};
