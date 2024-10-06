/**
 * Custom error class for API errors.
 *
 * @class ApiError
 * @extends {Error}
 *
 * @param {number} statusCode - The HTTP status code associated with the error.
 * @param {string} [message="Something went wrong"] - The error message.
 * @param {Array} [errors=[]] - Additional error details.
 * @param {string} [stack=""] - The stack trace (optional).
 *
 * @property {number} statusCode - The HTTP status code associated with the error.
 * @property {string} message - The error message.
 * @property {boolean} success - Indicates the success status (always false for errors).
 * @property {Array} errors - Additional error details.
 * @property {string} stack - The stack trace.
 * @property {null} data - Placeholder for additional data (always null for errors).
 *
 * @example
 * throw new ApiError(404, "Resource not found");
 */
class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
