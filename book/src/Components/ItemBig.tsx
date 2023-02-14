import React from 'react';
import styled from "styled-components";
import { IItem } from "../api";

const Wrapper = styled.div`
    width: 60vw;
    height: 30vh;

    display: table;
`;

const ListWrapper = styled.div`
    width:175px;
    height:188.14px;
    
    vertical-align: middle;

    display: table-cell;

    &:first-child{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    button{
        width: 75%;
        height: 12%;
        
        color: white;
        font-weight: 700;

        cursor: pointer;

        background: ${props=>props.theme.top};
        border-radius: 5px;
        border-color: ${props=>props.theme.top};
    }
`;

const ContentWrapper = styled.div`
    width: 100% - 300px;
    height: 188.14px;

    display: table-cell;
    vertical-align: top;

    margin-left: 10px;
`;

const ImgWrapper = styled.div`
    width: 125px;
    height: 188.14px;

    padding-left: 1vw;
    padding-right: 1vw;
    
    display: table-cell;
    vertical-align: middle;
`;

const Img = styled.img`
    width: 125px;
    height: 188.14px;
`;

const SpanHr = styled.span`
    &:before {
        content: "|";
        color: black;
        margin-left: 1vh;
        margin-right: 1vh;
    }
    &:after {
        content: "|";
        color: black;
        margin-left: 1vh;
        margin-right: 1vh;
    }
    font-size: 12pt;
`;

const P = styled.p`
    width: 30vw;
    text-align: left;
    overflow: hidden;
    textOverflow: ellipsis;
    line-height: 1.2;
    word-wrap : break-word;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 4;
`;

interface Props {
    book: IItem;
}

function ItemBig({book}: Props) {
    return (
        <Wrapper>
            <ImgWrapper><Img src={book.image}/></ImgWrapper>
            <ContentWrapper>
                <div style={{marginTop:"2vh"}}>
                    <span style={{fontSize:"15pt", fontWeight:"300", marginRight:"1vh"}}>[도서]</span>
                    <strong style={{fontSize:"18px"}}>{book.title}</strong>
                </div>
                <div style={{marginTop:"1vh"}}>
                    <span style={{fontSize:"12pt"}}>{`${book.author} 저`}</span>
                    <SpanHr>{book.publisher}</SpanHr>
                    <span style={{fontSize:"12pt"}}>{book.isbn}</span>
                </div>
                <div style={{marginTop:"1.2vh"}}>
                    <strong style={{fontSize:"20px"}}>{book.discount}</strong>
                    <span style={{fontSize:"12pt"}}>원</span>
                </div>
                <div>
                    <P>{book.description}</P>
                </div>
            </ContentWrapper>
            <ListWrapper>
                <div>
                    <div style={{display: "flex"}}><button>찜하기</button></div>
                </div>
            </ListWrapper>
        </Wrapper>
    );
}

export default ItemBig;