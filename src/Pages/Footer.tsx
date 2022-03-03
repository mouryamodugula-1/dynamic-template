import * as React from "react";
import Col from "antd/es/col";
import "./Styles/footer.css";
interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <div>
      <footer className="footer">
        <Col key="privacy" span={24}>
          <span>
            <small>
              <a
                rel="noopener noreferrer"
                title="View Privacy"
                className="footer_link"
                href="https://acertusdelivers.com/privacy-policy/"
              >
                Privacy
              </a>
            </small>
          </span>
          <span>
            <small className="right">
              &copy; 2021 ACERTUS All Rights Relentlessly Reserved
            </small>
          </span>
        </Col>
      </footer>
    </div>
  );
};

export default Footer;
