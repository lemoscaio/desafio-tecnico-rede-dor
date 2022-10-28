import BounceLoader from "react-spinners/BounceLoader"

export function Address({ address, loadingAddress }) {
  if (loadingAddress)
    return (
      <article className="address--loading">
        <BounceLoader color="#00bd89" />
      </article>
    )

  return (
    <>
      {address.address ? (
        <article className="address">
          <p className="address__text">
            {address.address}, {address.district}
          </p>
          <p className="address__text"></p>
          <p className="address__text">
            {address.city} - {address.state}
          </p>
          <p className="address__text">{address.code}</p>
        </article>
      ) : null}
    </>
  )
}
