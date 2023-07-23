function assertEquals(expect, actual) {
  if (expect === actual) {
    console.log("equal");
    return true;
  }
  return new Error(`Expect "${expect}" but "${actual}" returned`);
}

export default assertEquals;
