import ThemeSwitch from "./components/ThemeSwitch";
import MiscellaneousCheese from "./components/MiscellaneousCheese";
import { ThemeProvider } from "./hooks/useThemeContext";
import "./scss/bootstrap.scss";

export default function App() {
  return (
    <div className="App p-3">
      <div className="d-flex flex-column align-items-center">
        <h1>Bootstrap Dark Theme in React</h1>
        <h2>with a bunch of cheese</h2>

        <ThemeProvider>
          <ThemeSwitch />
          <MiscellaneousCheese />
        </ThemeProvider>
      </div>
    </div>
  );
}
