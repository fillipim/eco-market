"use client";

import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "@/contexts/AuthContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <AuthContextProvider>
            {children}
          </AuthContextProvider>
        </ThemeProvider>;
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
