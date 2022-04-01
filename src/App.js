import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./components/context/TaskContext";
import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
import Users from "./components/User/Users";
import TaskList from "./components/pages/TaskList";

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/users/:id/:name" element={<Users />} />
          <Route path="/tasklist" element={<TaskList />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;