import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 w-full h-full">
      <Navbar />
      <main className="h-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
