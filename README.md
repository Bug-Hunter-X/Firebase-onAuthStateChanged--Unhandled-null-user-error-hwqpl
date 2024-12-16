# Firebase onAuthStateChanged Error Handling
This example demonstrates a common error when using Firebase's `onAuthStateChanged` method.  The issue arises from directly accessing user properties before checking if the `user` object is null.  This can occur when the user is not yet authenticated or has logged out.

The solution introduces a null check to prevent errors and improve code robustness.  The solution also showcases logging which is essential for debugging Firebase issues.