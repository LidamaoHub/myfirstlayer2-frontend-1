import {
  RainbowKitProvider,
  getDefaultWallets,
  lightTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import Script from 'next/script';

/* RainbowKit imports */
import "@rainbow-me/rainbowkit/styles.css";
import { getAccount } from "@wagmi/core";
import { NextIntlProvider } from "next-intl";
import { createContext } from "react";
import { useMemo, useState } from "react";
import { WagmiConfig, chain, configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

import { ThemeProvider } from "@mui/material/styles";

import "../common/global.css";
import getTheme from "../common/theme";

/* RainbowKit variables */
const { chains, provider } = configureChains(
  [chain.optimismGoerli],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "My First Layer2",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
/* RainbowKit variables */

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = getTheme(mode);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({
          accentColor: "#000",
          accentColorForeground: "white",
          borderRadius: "large",
          fontStack: "system",
          overlayBlur: "small",
          selectionColor: "#000",
          modalBorder: "1px solid #fff",
        })}
      >
        <NextIntlProvider messages={pageProps.messages}>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
              <Script src="https://cdn.jsdelivr.net/npm/donate3-sdk@0.3.48/dist/webpack/bundle.js" />
            </ThemeProvider>
          </ColorModeContext.Provider>
        </NextIntlProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
