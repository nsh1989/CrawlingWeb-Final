import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
`;

const Layout = ({children}) => (
  <Wrapper>
      {children}
  </Wrapper>
);

// Layout.Main = styled.div`
//     margin: 0 auto;
//     margin-top: 2rem;
//     width: 100%;
//     position: relative;
//     background: gray;
// `;

export default Layout;