import { MainLayout } from "./layouts/main/MainLayout";
import { Content } from "./pages/Content/Content";
import { Switch, Route } from "react-router-dom";
import { Code } from "./pages/Code/Code";
import { Preview } from "./pages/Preview/Preview";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainLayout>
          <Content />
        </MainLayout>
      </Route>
      <Route path="/code">
        <Code />
      </Route>
      <Route path="/preview">
        <Preview />
      </Route>
    </Switch>
  );
};

export default App;
