import { useEffect, useState } from "react";
import { VideoMetadata } from "../types/VideoMetadata";

const useFetchMetadata = (url: string) => {
  const [data, setData] = useState<VideoMetadata | null>(null);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.youtube.com/oembed?format=json&url=${url}`
        );

        if (response.status !== 200) {
          setError("Invalid URL video");
        } else {
          setError(null);
          setData(await response.json());
        }
      } catch (e: any) {
        if (typeof e === "string") {
          setError(e.toUpperCase());
        } else if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
};

export default useFetchMetadata;
