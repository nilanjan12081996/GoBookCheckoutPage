import { Link } from "react-router-dom";
import {
  appStoreIcon,
  footerLogo,
  googlePayIcon,
  logo,
  messageIcon,
  phoneIcon,
} from "../../assets/images/images";
import { BsTelephone } from "../../assets/icons";
const Footer = () => {
  return (
    <div className="footer_container bg-[#ffe8d3] py-[50px] px-4 lg:px-0 lg:py-[100px]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="md:flex">
          <div className="w-3/12 text-right">
            <h3 className="text-black font-bold text-[18px] pb-6">
              Follow our news
            </h3>
            <div className="flex justify-end items-center mb-4">
              <p className="text-[14px] text-black font-medium">054221312343</p>
              <img src={phoneIcon} alt="phoneIcon" className="w-6 ml-4" />
            </div>
            <div className="flex justify-end items-center">
              <p className="text-[14px] text-black font-medium">@clan.info</p>
              <img src={messageIcon} alt="message" className="w-7 ml-4" />
            </div>
          </div>
          <div className="w-3/12 text-right pr-4">
            <h3 className="text-black font-bold text-[18px] pb-6">
              Categories
            </h3>
            <ul>
              <li>
                <Link className="text-[14px] text-black font-medium pb-2 block hover:text-[#18a743]">
                  Promotions
                </Link>
              </li>
              <li>
                <Link className="text-[14px] text-black font-medium pb-2 block hover:text-[#18a743]">
                  Cool your summer
                </Link>
              </li>
              <li>
                <Link className="text-[14px] text-black font-medium pb-2 block hover:text-[#18a743]">
                  Dairy and Cheeses
                </Link>
              </li>
              <li>
                <Link className="text-[14px] text-black font-medium pb-2 block hover:text-[#18a743]">
                  Vegetables and Fruits
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-3/12 text-right pr-10">
            <h3 className="text-black font-bold text-[18px] pb-6">Clan</h3>
            <ul>
              <li>
                <Link className="text-[14px] text-black font-medium pb-2 block hover:text-[#18a743]">
                  Clan
                </Link>
              </li>
              <li>
                <Link className="text-[14px] text-black font-medium pb-2 block hover:text-[#18a743]">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-[14px] text-black font-medium pb-2 block hover:text-[#18a743]">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-[14px] text-black font-medium pb-2 block hover:text-[#18a743]">
                  FAQs
                </Link>
              </li>
              <li>
                <Link className="text-[14px] text-black font-medium pb-2 block hover:text-[#18a743]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-[14px] text-black font-medium pb-2 block hover:text-[#18a743]">
                  Delete Account
                </Link>
              </li>
              <li>
                <Link className="text-[14px] text-black font-medium pb-2 block hover:text-[#18a743]">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-3/12 text-right">
            <div className="flex justify-end">
              <img src={footerLogo} alt="footerLogo" className="mb-5 w-20" />
            </div>
            <p className="text-black text-base font-medium pb-4">
              Download the KLAN app on your phone now!
            </p>
            <div className="flex justify-end items-center">
              <img
                src={googlePayIcon}
                alt="googlePayIcon"
                className="mr-5 w-4/12"
              />
              <img src={appStoreIcon} alt="appStoreIcon" className="w-4/12" />
            </div>
          </div>

          {/* <div className="w-full md:w-2/12 mb-4 text-center">
            <img src={logo} className="my-0 w-28 inline-block md:block" />
          </div>
          <div className="w-full md:w-8/12 mb-4 md:mb-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center md:text-left">
                <p className="text-base text-black font-bold pb-3">Resources</p>
                <ul>
                  <li>
                    <Link className="text-[14px] text-[#5b6778] font-normal pb-2 hover:text-[#5E17EB]">
                      Guide
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[14px] text-[#5b6778] font-normal pb-2 hover:text-[#5E17EB]">
                      Affiliate
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[14px] text-[#5b6778] font-normal pb-2 hover:text-[#5E17EB]">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <p className="text-base text-black font-bold pb-3">Company</p>
                <ul>
                  <li>
                    <Link className="text-[14px] text-[#5b6778] font-normal pb-2 hover:text-[#5E17EB]">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[14px] text-[#5b6778] font-normal pb-2 hover:text-[#5E17EB]">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[14px] text-[#5b6778] font-normal pb-2 hover:text-[#5E17EB]">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <p className="text-base text-black font-bold pb-3">Socials</p>
                <ul>
                  <li>
                    <Link className="text-[14px] text-[#5b6778] font-normal pb-2 hover:text-[#5E17EB]">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[14px] text-[#5b6778] font-normal pb-2 hover:text-[#5E17EB]">
                      TikTok
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[14px] text-[#5b6778] font-normal pb-2 hover:text-[#5E17EB]">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[14px] text-[#5b6778] font-normal pb-2 hover:text-[#5E17EB]">
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <p className="text-base text-black font-bold pb-3">Legal</p>
                <ul>
                  <li>
                    <Link className="text-[14px] text-[#5b6778] font-normal pb-2 hover:text-[#5E17EB]">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[14px] text-[#5b6778] font-normal pb-2 hover:text-[#5E17EB]">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/12 text-center">
            <p className="text-[14px] text-[#5b6778] font-normal pb-2">
              © 2024
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
