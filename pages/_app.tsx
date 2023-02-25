import type { AppProps } from 'next/app'
import "@/styles/global.scss";
import grid from "@/styles/grid.module.scss";
import { Navbar } from '@/components/navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={grid.parent}>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  )
}
