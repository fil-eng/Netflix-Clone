import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div className="footer_outer_wraper">
      <div className="social_media">
        <ul>
          <li>
            <FacebookOutlinedIcon />
          </li>
          {/* <li>instagram</li> */}
          <li>
            <YouTubeIcon />
          </li>
          <InstagramIcon />
        </ul>
      </div>
      <div className="footer_inner">
        <div>
          <ul>
            <li>Audio Depretion</li>
            <li>Investor Relation </li>
            <li>Legal Notice</li>
            <li>
              <p className="Sevice_Code">Sevice Code</p>
            </li>
            <li className="copy_write">&copy; 1997-2024 Netflix,Inc</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help Center</li>
            <li>Jops</li>
            <li>Cooki Preference</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gift Card</li>
            <li>Term Of Use</li>
            <li>Cooperate Informotion</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li> Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
