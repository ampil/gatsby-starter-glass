import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

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


// shows tags in a post, i.e. http://localhost:8000/tags/after
const Tags = ({ tags }) => {
  return (
    <div>
      {tags &&
        tags.map((tag) => {
          return (
            <Tag key={tag}>
              <Link to={`/tags/${toKebabCase(tag)}`}>{tag}</Link>
            </Tag>
          );
        })}
    </div>
  );
};

export default Tags;

const Tag = styled.span`
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  font-size: var(--size-300);

  & a {
    position: relative;
    z-index: 2;
    text-decoration: none;
    color: inherit;
    padding: 0.2rem 0.6rem;
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 4px;
  }

  & a:hover {
    background-color: rgba(255, 255, 255, 0.9);
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
    border: 1px solid #1a1a1b;
    opacity: 0.8;
  }
`;
