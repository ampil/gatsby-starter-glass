import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import styled from "styled-components";


const letters = {"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu"};

function transliterate(slug) {
  return slug
    .split("")
    .map((char) => letters[char] || char)
    .join("");
}


const toKebabCase = (str) => {
  return transliterate(str)
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
};


// on page with all tags: http://localhost:8000/tags/

const Tags = ({ data }) => {
  const tags = data.allMarkdownRemark.group;

  return (
    <Layout title="Все авторы">
      <h1>Все авторы</h1>
      <br></br>
      <TagList>
        {tags.map((tag) => (
          <TagItem key={tag.fieldValue}>
            <Link to={`/tags/${toKebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </TagItem>
        ))}
      </TagList>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const TagList = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  padding: 0;
  max-width: 60rem;
`;

const TagItem = styled.li`
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  font-size: var(--size-200);

  & a {
    text-decoration: none;
    color: inherit;
    padding: 0.2rem 0.6rem;
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 4px;
  }

  body.light-mode & a {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.7);
  }

  body.light-mode & a:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  body.dark-mode & a {
    background-color: #212122;
    border: 1px solid #3b3b3c;
    opacity: 0.8;
  }

  body.light-mode & a:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  body.dark-mode & a:hover {
    background-color: #3b3b3c;
    opacity: 1;
  }
`;
