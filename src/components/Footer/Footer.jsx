import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <footer class="relative bg-blueGray-200 pt-8 pb-6">
      <hr class="my-6 border-blueGray-300" />
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap text-left lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
              <h4 class="text-4xl font-semibold text-blueGray-700">CORSIT</h4>
              <h5 class="text-2xl mt-0 mb-2 text-blueGray-600">
                Stay connected! Follow us on social media for updates, events, and more.
              </h5>
              <div class="mt-6 lg:mb-0 mb-6 flex gap-5">
                <div className="text-3xl">
                  <a
                    href="https://www.instagram.com/corsit.sit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
                <div className="text-3xl">
                  <a
                    href="https://www.facebook.com/thecorsit/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook}/>
                  </a>
                </div>
                <div className="text-3xl">
                  <a
                    href="https://www.youtube.com/channel/UCcm-ttunddHrEGWUdYkUd2w"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube}/>
                  </a>
                </div>
                <div className="text-3xl">
                  <a
                    href="https://www.linkedin.com/company/corsit/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin}/>
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="flex flex-wrap items-top mb-6">
                <div class="w-full lg:w-4/12 px-4 ml-auto">
                  <span class="block uppercase text-blueGray-500 text-lg font-bold mb-2">Events</span>
                  <ul class="list-unstyled">
                    <li>
                      <a class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-lg" href="">RoboExpo</a>
                    </li>
                    <li>
                      <a class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-lg" href="">Workshop</a>
                    </li>
                    <li>
                      <a class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-lg" href="">Robocor</a>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                  <span class="block uppercase text-blueGray-500 text-lg font-bold mb-2">Other Resources</span>
                  <ul class="list-unstyled">
                    <li>
                      <a class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-lg" href="">
                        <FontAwesomeIcon icon={faWhatsapp} size="lg" />&nbsp;
                        WhatsApp</a>
                    </li>
                    <li>
                      <a class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-lg" href="">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />&nbsp;
                        Gmail</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
