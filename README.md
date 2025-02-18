# JavaScript Negative Zero Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to the handling of negative zero (-0).  The bug arises from the loose comparison (`===`) not distinguishing between `0` and `-0`, leading to unexpected behavior in certain calculations.

## Bug Description

The `myFunction` in `bug.js` attempts to handle cases where either input (`a` or `b`) is zero. However, it fails to correctly handle negative zero.  If either `a` or `b` is `-0`, the function incorrectly returns `0` instead of the expected result (either Infinity or -Infinity).

## Solution

The `bugSolution.js` file provides a corrected version of `myFunction` that explicitly checks for both positive and negative zero using `Object.is()` for accurate comparison.