"use client";

import { useEffect } from "react";
import "../styles/privacy-policy.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const response = await fetch('https://www.iubenda.com/api/privacy-policy/61463494/no-markup');
        const data = await response.json();
        const policyContainer = document.getElementById('policy-container');
        if (policyContainer && data.content) {
          const cleanContent = data.content
            .replace(/{"success":true,"content":"/, '')
            .replace(/"}\s*$/, '')
            .replace(/\\n/g, '\n')
            .replace(/\\"/g, '"');
          
          policyContainer.innerHTML = cleanContent;
        }
      } catch (error) {
        console.error('Error fetching policy:', error);
      }
    };

    fetchPolicy();
  }, []);

  return (
    <>
      <Header />
      <div className="privacy-policy">
        <div id="policy-container" />
      </div>
      <Footer />
    </>
  );
}