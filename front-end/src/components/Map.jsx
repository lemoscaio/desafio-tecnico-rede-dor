import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api"
import { useCallback, useState } from "react"
import { Address } from "./Address"

const containerStyle = {
  width: "100%",
  height: "400px",
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

export function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <OverlayView
            mapPaneName="overlayMouseTarget"
            position={center}
          >
            <Address></Address>
          </OverlayView>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  )
}
