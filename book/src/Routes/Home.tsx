import React from 'react';
import Search from "../Components/Search";
import styled from "styled-components";

export const TopWrapper = styled.div`
    width: 100vw;
    height: 25vh;
    border-color: ${props=>props.theme.top};
    position: relative;
`;
export const SearchWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;
export const Logo = styled.svg`
  position: absolute;
  top: 50%;
  left: 21%;
  transform: translate(0,-50%);
  fill: ${props=>props.theme.middle};
}
    
`;

function Home() {
  return (
    <>
      <TopWrapper>
        <Logo width="5vw" height="5vw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C87.5 32 35.1 48.6 9 59.9c-5.6 2.4-9 8-9 14V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V73.9c0-6.1-3.4-11.6-9-14C540.9 48.6 488.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/>
        </Logo>
        <SearchWrapper>
          <Search/>
        </SearchWrapper>
      </TopWrapper>
    </>
  );
}

export default Home;
