import { useState } from "react";

export function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  async function getPosition() {
    setIsLoading(true);

    try {
      const res = await fetch("http://ip-api.com/json/?fields=61439");
      const data = await res.json();
      setPosition({
        lat: data.lat,
        lng: data.lon,
      });
      setIsLoading(false);
    } catch (err) {
      setError("It seems you are offline!");
      setIsLoading(false);
    }
  }
  return { isLoading, position, error, getPosition };
}
