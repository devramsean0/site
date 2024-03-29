import { theme } from '@/lib/theme';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui';
import "@/styles/code.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // @ts-expect-error
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
