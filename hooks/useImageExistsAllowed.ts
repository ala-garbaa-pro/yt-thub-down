import { useEffect, useState } from "react";

const useImageExistsAllowed = (url: string) => {
  const [data, setData] = useState<boolean | null>(null);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method: "HEAD",
        });
        setData(await !!response.ok);
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

export default useImageExistsAllowed;
