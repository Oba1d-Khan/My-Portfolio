import About from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import "@/styles/globals.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <CTA/>
      <Contact />
      <Footer />
    </>
  );
}

