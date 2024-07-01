import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SidebarLayout from "./layouts/sidebar"; // Use the sidebar layout
import SplashScreen from "./pages/SplashScreen";
import JoinActivity from "./pages/JoinActivity";
import OTPActivity from "./pages/OTPActivity";
import Driver from "./pages/Driver";
import Success from "./pages/Success";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home", // Feel free to change this to your liking
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/join" element={<SidebarLayout />}>
              <Route index element={<JoinActivity />} />
              <Route path="/otp" element={<OTPActivity />} />
              <Route path="/driver" element={<Driver />} />
              <Route path="/success" element={<Success />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;