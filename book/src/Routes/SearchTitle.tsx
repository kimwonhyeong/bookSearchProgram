import React from 'react';
import Search from "../Components/Search";
import styled from "styled-components";
import { useQuery } from 'react-query';
import {useRecoilState} from "recoil";
import { searchApi, ISearchApi } from "../api";
import {searchTitle} from "../atom";
import { SearchWrapper, TopWrapper, Logo } from './Home';
import ItemBig from "../Components/ItemBig";
import {Link} from "react-router-dom";

const BottomWrapper = styled.div`
    width: 100vw;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1vw;
`;

const ResultTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    &:first-child{
        float: left;
        margin-left: 42%;

        font-size: 30px;
        font-weight: bold;
    }
`;

const Yes24 = styled.img`
    width:60px;
    height:30px;
    border: solid;
    border-width: 1px 1px 0.5px 1px;
    border-color: ${props=>props.theme.middle};
    cursor: pointer;
`;

const Alladin = styled.img`
    width:60px;
    height:30px;
    border: solid;
    border-width: 1px 0.5px 1px 1px;
    border-color: ${props=>props.theme.middle};
    cursor: pointer;
`;

const Gyobo = styled.img`
    width:60px;
    height:30px;
    border: solid;
    border-width: 1px 0.5px 0.5px 1px;
    border-color: ${props=>props.theme.middle};
    cursor: pointer;
`;

function SearchTitle() {
    const [title, setTitle] = useRecoilState(searchTitle);
    const {data: book} = useQuery<ISearchApi>(["bookKey",title],()=>searchApi(title));
    return (
        <>
            <div style={{verticalAlign: "bottom", display: "absolute", top:"0", right:"0"}}>
                <span style={{marginLeft: "2vw", fontSize:"20px", fontWeight:"100", color:"#686868"}}>다른 도서 사이트:</span>
                <div style={{marginLeft: "0.5vw", display: 'inline-block', height:"30px"}}>
                    <div style={{display:"table", width:"180px", height:"30px"}}>                                
                        <a href="http://www.yes24.com/main/default.aspx">
                            <div style={{display: "table-cell"}}><Yes24 src="https://t1.daumcdn.net/cfile/tistory/210D1C4C58666DC009"/></div>
                        </a>
                        <a href="https://www.kyobobook.co.kr/">
                            <div style={{display: "table-cell"}}><Gyobo  src="https://t1.daumcdn.net/cfile/tistory/23027E35586A7ED323"/></div>
                        </a>
                        <a href="https://www.aladin.co.kr/home/welcome.aspx">
                            <div style={{display: "table-cell"}}><Alladin  src="//image.aladin.co.kr/img/header/2011/aladin_logo_new.gif"/></div>
                        </a>
                    </div>
                </div>
            </div>
            <TopWrapper>
                <Logo width="5vw" height="5vw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C87.5 32 35.1 48.6 9 59.9c-5.6 2.4-9 8-9 14V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V73.9c0-6.1-3.4-11.6-9-14C540.9 48.6 488.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/>
                </Logo>
                <SearchWrapper>
                    <Search/>
                </SearchWrapper>
            </TopWrapper>
            <BottomWrapper>
                <ResultTitle>
                    <span>검색결과: {book?.items.length}</span>
                    <span>건</span>
                </ResultTitle>
                <ul>
                    {book ? book.items.map((item)=>
                        <li><ItemBig book={item} key={item.isbn}/><hr/></li>
                    ): null}
                </ul>
            </BottomWrapper>
        </>
    );
}

export default SearchTitle;
