import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
      <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
