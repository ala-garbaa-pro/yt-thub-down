import { useEffect, useState } from "react";

const useIsImageExistsLocalAPI = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(`/api/isImageExists?url=${url}`);

        if (response.status !== 200) {
          setData("unexisting");
        } else {
          setData("existing");
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

export default useIsImageExistsLocalAPI;
