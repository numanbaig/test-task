import Layout from "./components/Layout/HomeLayout";
import theme from "./theme/index";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./Pages/Home";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
