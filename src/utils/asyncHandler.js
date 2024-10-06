/**
 * A higher-order function that wraps an asynchronous request handler function
 * and ensures that any errors are passed to the next middleware.
 *
 * @param {Function} requestHandler - The asynchronous request handler function to be wrapped.
 * @returns {Function} A new function that wraps the request handler and catches any errors.
 * @throws {TypeError} If the provided requestHandler is not a function.
 *
 * @example
 * const myAsyncHandler = async (req, res, next) => {
 *   // Your async code here
 * };
 *
 * app.get('/route', asyncHandler(myAsyncHandler));
 */

const asyncHandler = (requestHandler) => {
  if (typeof requestHandler !== "function") {
    throw new TypeError("requestHandler must be a function");
  }
  return async (req, res, next) => {
    try {
      await Promise.resolve(requestHandler(req, res, next));
    } catch (err) {
      next(err);
    }
  };
};

export default asyncHandler;
