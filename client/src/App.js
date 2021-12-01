import { Palette } from "./components/Palette/Palette";
import { MainLayout } from "./layouts/main/MainLayout";
import { Content } from "./pages/Content/Content";

const App = () => {
  return (
    <MainLayout>
         <Content />
         <Palette />
    </MainLayout>
  );
};

export default App;
