import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 800px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
