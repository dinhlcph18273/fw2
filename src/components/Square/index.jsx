import styled from "styled-components";

const Square = ({ onClick, value }) => {
  return <Button className={value === "X" ? "is-x" : value === "O" ? "is-o" : ""} onClick={onClick}>{value}</Button>;
};

const Button = styled.div`
  height: 80px;
  width: 80px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 100px;
  font-weight:bold ;
  padding: 15px;
  box-shadow: rgba(149,157,165,0.2)0px 8px 24px;
`;
export default Square;
