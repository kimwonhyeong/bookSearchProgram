import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useRecoilState} from "recoil";
import {searchApi} from "../api";
import {searchTitle} from "../atom";

const SearchForm = styled.form`
  width: 40vw;
  height: 8vh;
  background: ${props=>props.theme.top};

  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 35vw;
  height: 6vh;

  margin-left: 1vw;

  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  outline: none;
  border: none;

  font-size: 20px;
`;

const SearchLogo = styled.svg`
  width: 27px;
  height: 27px;

  position: absoulte;
  top: 50%;
  left: 50%;
  transform: translate(0,-5%);
`;

const Button = styled.button`
  margin-left:1.3vh;

  cursor: pointer;

  width: 30px; 
  height: 30px;

  outline: 0;
  border: none;
  background: rgba(0, 0, 0, 0);

  position: relative;
`;

interface IForm{
  title: string;
}

function Search() {
  const navigate = useNavigate();
  const [title, setTitle] = useRecoilState(searchTitle);
  const {register, handleSubmit, setValue} = useForm<IForm>();
  const onValid = (data: IForm) => {
    setTitle(data.title);
    setValue("title", "");
    navigate(`/search?title=${data.title}`);
  }
  return (
    <SearchForm onSubmit={handleSubmit(onValid)}>
      <SearchInput
        placeholder="제목(혹은 작가명/출판사/ISBN)"
        {...register("title",{required: true})}
      />
      <Button>
        <span style={{width: "40px",height:"40px"}}>
          <SearchLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="white" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
          </SearchLogo>
        </span>
      </Button>
    </SearchForm>
  )
}

export default Search;