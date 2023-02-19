import { useEffect, useState } from "react";

const useImageExistsBypassCORS = (url: string) => {
  const [data, setData] = useState<boolean | null>(null);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      const checkImage = (srcImg: string) =>
        new Promise(function (resolve, reject) {
          if (typeof window === "object") {
            const img = new window.Image();
            img.src = srcImg;

            if (img.complete) {
              return resolve(true);
            } else {
              img.onload = () => {
                return resolve(true);
              };

              img.onerror = () => {
                return reject(false);
              };
            }
          }
        });

      try {
        setLoading(true);

        const response = await checkImage(url);
        setData(await !!response);
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

export default useImageExistsBypassCORS;
