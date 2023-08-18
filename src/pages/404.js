import React from 'react';
import Layout from '../components/layout';
import { Ghost } from 'react-kawaii';
import styled from 'styled-components';

const NotFoundPage = () => {
  return (
    <Layout title="Ошибка 404">
      <NotFoundPageWrapper>
        <Ghost size={240} mood="sad" color="#E0E4E8" />
        <h1>ой..</h1>
        <p>Ошибка 404. такой страницы нет</p>
      </NotFoundPageWrapper>
    </Layout>
  );
};

export default NotFoundPage;

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
