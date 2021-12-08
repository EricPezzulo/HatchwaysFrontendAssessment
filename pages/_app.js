import "tailwindcss/tailwind.css";
import { StudentProvider } from "../contexts/StudentContext";

function MyApp({ Component, pageProps }) {
  return (
    <StudentProvider>
      <Component {...pageProps} />
    </StudentProvider>
  );
}

export default MyApp;
