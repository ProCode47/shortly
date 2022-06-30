import React from "react";
import {
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer class="col-sm align">
        <div class="brand col-item">
          <h1>Shortly</h1>
        </div>
        <div class="links col-sm col-item mt-lg">
          <div class="column align col-item">
            <li>Features</li>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </div>
          <div class="column align col-item mt-lg">
            <li>Resources</li>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </div>
          <div class="column align col-item mt-lg">
            <li>Company</li>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </div>
        </div>
        <div class="socials mt-lg col-item align">
          <i>
            <FaFacebook />
          </i>
          <i>
            <FaTwitter />
          </i>
          <i>
            <FaPinterest />
          </i>
          <i>
            <FaInstagram />
          </i>
        </div>
      </footer>
    </>
  );
}
