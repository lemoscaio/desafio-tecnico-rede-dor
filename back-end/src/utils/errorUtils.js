export function isAppError(error) {
  return error.type !== undefined
}

export function errorTypeToStatusCode(errorType) {
  const types = {
    unauthorized: 401,
    notFound: 404,
    conflict: 409,
    wrongSchema: 422,
  }

  return types[errorType] || 400
}

export function notFoundError(message) {
  return { type: "notFound", message }
}
export function unauthorizedError(message) {
  return { type: "unauthorized", message }
}
export function conflictError(message) {
  return { type: "conflict", message }
}
export function wrongSchemaError(message) {
  return { type: "wrongSchema", message }
}