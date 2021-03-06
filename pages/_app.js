import Layouts from "../layouts/Layouts";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";


function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp;
