import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';

const ContactTemplate = ({data}) => {
  const {html, frontmatter} = data.markdownRemark;

  return (
    <Layout title={frontmatter.title}>
      <ContactWrapper>
        <ContactCopy dangerouslySetInnerHTML={{__html: html}} />
      </ContactWrapper>

      <br /><br />
      <p align="center">Напишите нам:</p>
      <br />
      <div class="cForm">
        <ContactForm />
      </div>
    </Layout>
  );
};

export default ContactTemplate;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;

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
`;

const ContactCopy = styled.div`
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
