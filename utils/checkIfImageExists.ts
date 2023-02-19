/**
 * @name checkIfImageExistsNextJS
 * @description Checks if image exists in the URL address provided in the first parameter by nextJS
 * @author Ala GARBAA
 * @see WebSite { @link https://www.alagarbaa.com/ }
 */

const checkIfImageExistsNextJS = (
  url: string,
  callback: (exists: boolean) => void
) => {
  if (typeof window === "object") {
    //This code is executed in the browser
    // console.log(window.innerWidth);

    const img = new window.Image();
    img.src = url;

    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };

      img.onerror = () => {
        callback(false);
      };
    }
  }
};

export default checkIfImageExistsNextJS;
