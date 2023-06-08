import "@/styles/globals.css";
import Layout from "./Layout";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import { Router } from "next/router";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    Router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
    return () => {
      Router.events.off("routeChangeStart", () => {
        setLoading(true);
      });
      Router.events.off("routeChangeComplete", () => {
        setLoading(false);
      });
    };
  }, []);
  return (
    <Provider store={store}>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
}
