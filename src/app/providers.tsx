"use client";

import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "@/styles/chackraTheme";
import AuthContextProvider from "@/contexts/AuthContext";
import CartProvider from "@/contexts/CartContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={customTheme}>
        <ThemeProvider theme={theme}>
          <AuthContextProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </AuthContextProvider>
        </ThemeProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
