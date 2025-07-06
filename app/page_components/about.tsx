import { getProfile } from "@/sanity-utils";
import { PortableText } from "next-sanity";

const profile = await getProfile();

export default function about() {
  return (
    // One
    <section id="one">
      <header className="major">
        <h2>About Me</h2>
      </header>
      <PortableText value={profile.bio} />
      {addLinkAttribute()}
      {/* <ul className="actions">
        <li>
          <a href="#" className="button">
            Learn More
          </a>
        </li>
      </ul> */}
      <div className="container">
        <div className="row">
          <div className="col-4 col-12-medium">
            <h3>Software Development</h3>
            <ul>
              <li>Embedded C</li>
              <li>(System) Verilog</li>
              <li>C/C++</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="col-4 col-12-medium">
            <h3>Embedded Systems</h3>
            <ul>
              <li>VxWorks RTOS</li>
              <li>FreeRTOS</li>
              <li>SPI, I2C, UART, USB</li>
              <li>ARM assembly</li>
              <li>Risc-V</li>
            </ul>
          </div>
          <div className="col-4 col-12-medium">
            <h3>Platforms</h3>
            <ul>
              <li>ST Microcontrollers (STM32)</li>
              <li>AVR/Arduino</li>
              <li>ARM</li>
              <li>NXP</li>
              <li>Artix-7 FPGA</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-4 col-12-medium">
            <h3>Web Development</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div className="col-4 col-12-medium">
            <h3>CAD/Design</h3>
            <ul>
              <li>Altium Designer</li>
              <li>KiCad</li>
              <li>Autodesk Fusion 360</li>
            </ul>
          </div>
          <div className="col-4 col-12-medium">
            <h3>Interests</h3>
            <ul>
              <li>Build Systems</li>
              <li>Software Quality Assurance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function addLinkAttribute() {
  if (typeof window !== "undefined") {
    $(document).ready(function () {
      const textBlock = document.getElementsByClassName("bio");
      for (let i = 0; i < textBlock.length; i++) {
        var text = textBlock[i].getElementsByTagName("a");
        for (let j = 0; j < text.length; j++) {
          if (!text[j].hasAttribute("target")) {
            text[j].setAttribute("target", "_blank");
          }
          if (!text[j].hasAttribute("rel")) {
            text[j].setAttribute("rel", "noreferrer");
          }
        }
      }
    });
  }
}
