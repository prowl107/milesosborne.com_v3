import React from "react";
import SubmitContactFormButton from "./submitContactFormButton";

export default function contactForm() {
  return (
    // Three
    <>
      <section id="three">
        <h2>Get In Touch</h2>
          <p>Have a question? Just want to say hi? Feel free to reach out!</p>
        <div className="row">
          <div className="col-8 col-12-small"></div>
        </div>
      </section>
      <SubmitContactFormButton></SubmitContactFormButton>
    </>
  );
}
