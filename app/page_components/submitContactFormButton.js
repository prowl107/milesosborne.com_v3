'use client';
import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
const FORMSPARK_FORM_ID = "GvHjf2rm";

export default function SubmitContactFormButton({ children }) {
  
  const [visible, setVisible] = useState(false);

    const [submit, submitting] = useFormspark({
      formId: FORMSPARK_FORM_ID,
    });
  
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await submit({ name, email, message });
      alert("Form submitted");
      window.location.href = "https://" + window.location.hostname;
    };

  return (
    <>
    <div className="col-8 col-12-small">
      <form onSubmit={onSubmit}>
        <div className="row gtr-uniform gtr-50">
          <div className="col-6 col-12-xsmall">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-6 col-12-xsmall">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-12">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="col-12">
            <ul className="actions">
              <li>
                <button type="submit" disabled={submitting}>
                  {submitting ? "Sending..." : "Send"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}
