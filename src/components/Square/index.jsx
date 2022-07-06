import styled from "styled-components";

const Square = ({ onClick, value }) => {
  return <Button onClick={onClick}>{value}</Button>;
};

const Button = styled.div`
  height: 80px;
  width: 80px;
  border: 1px solid #fff;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
export default Square;
