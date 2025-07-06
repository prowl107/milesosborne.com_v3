import React from "react";
import SubmitContactFormButton from "./submitContactFormButton";

export default function contactForm() {
  return (
    // Three
    <>
      <section id="three">
        <h2>Get In Touch</h2>
        <p>
          Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
          magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
          vulputate lorem neque lorem ipsum dolor.
        </p>
        <div className="row">
          <div className="col-8 col-12-small"></div>
        </div>
      </section>
      <SubmitContactFormButton></SubmitContactFormButton>
    </>
  );
}
