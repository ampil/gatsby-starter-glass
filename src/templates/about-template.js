import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ContactForm from "../components/ContactForm";

const AboutTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const profileImage = getImage(frontmatter.profile_image);

  return (
    <Layout title={frontmatter.title}>
      <AboutWrapper>
        <AboutImageWrapper image={profileImage} alt="" />

        <AboutCopy dangerouslySetInnerHTML={{ __html: html }} />
      </AboutWrapper>

      <br></br><br></br>
      <h2 align="center">Форма обратной связи</h2>
      <br></br>
      <p align="center">Напишите нам:</p>  
      <div class = "cForm">
      <ContactForm />
      </div>
    </Layout>
  );
};

export default AboutTemplate;

const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  a {
    color: #962020;
    text-decoration: underline;
    //text-decoration-thickness: 0.125rem;
  }

  @media screen and (max-width: 1000px) {
    & {
      flex-direction: column;
    }

    & > * {
      margin-top: 2rem;
      width: 100%;
      text-align: center;
    }
  }

  @media screen and (max-width: 700px) {
    & h2 {
      // font-size: var(--size-600);
      font-size: 8vw;
    }
  }

  @media screen and (max-width: 420px) {
    & h2 {
      // font-size: var(--size-600);
      font-size: 7vw;
    }
  }



`;

const AboutImageWrapper = styled(GatsbyImage)`
  display: block;
  border-radius: 50%;
  height: 300px;
  width: 300px;
`;

const AboutCopy = styled.div`
  max-width: 60ch;

  & p {
    font-size: var(--size-400);
  }
`;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;


