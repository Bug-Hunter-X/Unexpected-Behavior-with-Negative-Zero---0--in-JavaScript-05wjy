function myFunction(a, b) {
  if (Object.is(a, 0) || Object.is(b, 0)) {
    return 0; // Correctly handles both 0 and -0
  }
  return a / b; 
}