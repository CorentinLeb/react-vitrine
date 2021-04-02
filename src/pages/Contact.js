import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm/>
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>1 passage Hermitte</p>
              <p>33000 Bordeaux</p>
            </div>
          </div>

        <div className="phone">
          <div className="content">
            <h4>téléphone</h4>
            <CopyToClipboard text="0630229202" className="hover">
              <p
                style={{ cursor: "pointer" }}
                className="clipboard"
                onClick={() => {
                  alert("Téléphone copié !");
                }}
              >06 20 33 92 02</p>
            </CopyToClipboard>
          </div>
        </div>
        <div className="email">
            <div className="content">
               <h4>email</h4>
               <CopyToClipboard text="leberre.corentin@gmail.com" className="hover">
                   <p style={{ cursor: "pointer" }}
                className="clipboard"
                onClick={() => {
                  alert("Email copié !");
                }}>leberre.corentin@gmail.com</p>
               </CopyToClipboard>
            </div>
        </div>
        <SocialNetwork />
        <div className="credits">
            <p>Corentin LE BERRE | 2021</p>
        </div>
      </div>
      <ButtonsBottom left={'/project-4'} />
      </div>
    </main>
  );
};

export default Contact;
