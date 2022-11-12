import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ParkingConfirmedView } from "lib/views/Parking";
import { QUERY_CLIENT } from "lib/services/queryClient";
import "./App.css";

const App: React.FC = () => {
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      {/* Normally, there are Routes here for Home, Login, etc. */}
      <ParkingConfirmedView />
    </QueryClientProvider>
  );
}

export default App;
