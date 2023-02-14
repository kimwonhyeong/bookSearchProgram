import React from 'react';

const naverId : string = "7iOqOgyiTDVTtxO4xLJQ";
const naverSecret : string = "6upkCWikaP";

export interface ISearchApi{
    display: number;
    items: IItem[];
    lastBuildDate: string;
    start: number;
    total: number;
}

export interface IItem{
    author: string;
    description: string;
    discount: string;
    image: string;
    isbn: string;
    publisher: string;
    title: string;
}

export function searchApi(title: string){
    return fetch(`/v1/search/book.json?query=${title}&display=25`
    ,{
        headers:{
            Host: "openapi.naver.com",
            "User-Agent": "curl/7.49.1",
            Accept: "*/*",
            'Content-Type': 'application/json',
            "X-Naver-Client-Id": naverId,
            "X-Naver-Client-Secret": naverSecret
        }
    }).then((response)=>response.json());
}
//======================================================================
const aladinKey = "ttbansun6672034001";

export function aladinNewSpecial(){
    return fetch(`http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=[${aladinKey}]&QueryType=ItemNewSpecial&MaxResults=25&start=1&SearchTarget=Book&output=xml&Version=20131101`).then((response)=>response.json());
}

export function aladinBestseller(){
    return fetch(`http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=[${aladinKey}]&QueryType=Bestseller&MaxResults=25&start=1&SearchTarget=Book&output=xml&Version=20131101`).then((response)=>response.json());
}