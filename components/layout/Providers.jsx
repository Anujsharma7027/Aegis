"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { AppLayout } from "@/components/layout/AppLayout";
export function Providers({ children }) {
    const [queryClient] = useState(() => new QueryClient());
    return (<ThemeProvider defaultTheme="dark" attribute="class" storageKey="algo-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppLayout>{children}</AppLayout>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>);
}
