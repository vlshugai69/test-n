"use client";

import { useEffect } from "react";
import "../styles/terms.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function TermsOfService() {
  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await fetch('https://www.iubenda.com/api/terms-and-conditions/61463494/no-markup');
        const data = await response.json();
        const termsContainer = document.getElementById('terms-container');
        if (termsContainer && data.content) {
          const cleanContent = data.content
            .replace(/{"success":true,"content":"/, '')
            .replace(/"}\s*$/, '')
            .replace(/\\n/g, '\n')
            .replace(/\\"/g, '"');
          
          termsContainer.innerHTML = cleanContent;
        }
      } catch (error) {
        console.error('Error fetching terms:', error);
      }
    };

    fetchTerms();
  }, []);

  return (
    <>
      <Header />
      <div className="terms-container">
        <div id="terms-container" />
      </div>
      <Footer />
    </>
  );
}