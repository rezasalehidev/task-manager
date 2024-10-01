import React from "react";
import styled from "styled-components";

const HeaderBox = styled.h1`
  text-align: center;
  margin: 20px;
  font-size: 2rem;
  color: #333;
`;

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return <HeaderBox>{title}</HeaderBox>;
};
