import { useEffect } from "react";

import Homepage from "./Pages/Homepage/Homepage";
import DetailPages from "./Pages/DetailedPages/DetailedPages";
import Footer from "./Pages/Footer/Footer";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

function App() {
  useEffect(() => {
    document.title = "Khoa Nguyen";
  }, []);

  return (
    <>
      <NavigationBar />
      <Homepage />
      <DetailPages />
      <Footer />
    </>
  );
}

export default App;
