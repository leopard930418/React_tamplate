import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material";
import Root from "routes";
import { lightTheme } from "theme/lightTheme";
import PrerenderTailwind from "views/prerender/PrerenderTailwind";
import "rsuite/dist/rsuite.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "App.css";
import "style/index.scss";

import "functions/Setup";

function App() {
  const loading = useSelector((state) => state?.data?.loading ?? false);
  const title = useSelector((state) => state?.data?.title ?? "");

  return (
    <>
      <PrerenderTailwind />
      <ThemeProvider theme={lightTheme}>
        <Root />
      </ThemeProvider>
    </>
  );
}

export default App;
