import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar';
import ("bootstrap/dist/js/bootstrap.js");
export default function App({ Component, pageProps }) {
  return <><Navbar></Navbar><Component {...pageProps} /></>
}