import { errorTypeToStatusCode, isAppError } from "../utils/errorUtils.js"


export function handleError(
  error,
  req,
  res,
  next,
) {
  console.log("An error occured!", error)

  if (isAppError(error)) {
    const statusCode = errorTypeToStatusCode(error.type)
    res.status(statusCode).send(error.message)
  }

  if (error.details)
    return res
      .status(422)
      .send(error.details.map(({ message }) => message))

  res.sendStatus(500)
}