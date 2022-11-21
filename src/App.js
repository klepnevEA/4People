import { Landing } from "pages/landing";
import { Route, Routes } from "react-router-dom";
import { Ui } from "pages/ui";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ui" element={<Ui />} />
      </Routes>
    </>
  );
};

export default App;
