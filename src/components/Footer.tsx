// Copyright (c) 2023 Mahendra Prasad T
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { getFeather } from "../utilities/functions";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  max-height: 100px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <div className="d-flex justify-content-center">
          <a href="https://www.instagram.com/i_am_phoenix49/" className="p-2">
            <img src={getFeather("instagram")} alt="Mail" />
          </a>
          <a href="mailto:tamilarasan792002p@gmail.com" className="p-2">
            <img src={getFeather("mail")} alt="Mail" />
          </a>
          <a href="https://github.com/prasad792002" className="p-2">
            <img src={getFeather("github")} alt="Mail" />
          </a>
          <a href="https://twitter.com/prasad792002" className="p-2">
            <img src={getFeather("twitter")} alt="Mail" />
          </a>
          <a href="https://www.facebook.com/Mahendra Prasad" className="p-2">
            <img src={getFeather("facebook")} alt="Mail" />
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <p className="p-2">
            Copyright &copy; {new Date().getFullYear()} Mahendra Prasad T
          </p>
        </div>
      </Container>
    </FooterWrapper>
  );
}
