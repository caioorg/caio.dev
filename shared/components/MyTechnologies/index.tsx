import React from 'react';
import { DiGithubFull, DiReact, DiCss3, DiHtml5, DiJsBadge, DiSass, DiNodejsSmall } from 'react-icons/di'
import { FaAws } from 'react-icons/fa'
import { Container } from './styles';

const MyTechnologies: React.FC = () => {
  return (
    <Container>
      <DiHtml5 />
      <DiCss3 />
      <DiSass />
      <DiJsBadge />
      <DiGithubFull />
      <DiReact />
      <DiNodejsSmall />
      <FaAws />
    </Container>
  );
}

export default MyTechnologies;