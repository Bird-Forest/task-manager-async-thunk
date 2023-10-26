import styled from 'styled-components';

export const WrapCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 20px;
  padding: 10px;
  min-width: 360px;
  background-color: rgb(179, 229, 255);
  -webkit-box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.75);
  /* margin-left: auto;
  margin-right: auto; */

  @media screen and (min-width: 600px) {
    width: 580px;
  }
`;
export const TitleCounter = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: rgb(0, 77, 153);
  padding: 0;
  margin: 0;

  @media screen and (min-width: 600px) {
    font-size: 28px;
  }
`;
export const Counter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  /* width: 200px; */
  /* height: 50px; */
  @media screen and (min-width: 600px) {
    height: 50px;
  }
`;
export const Active = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: rgb(0, 77, 153);
  font-size: 28px;
  font-weight: 500;
  padding: 0;
  margin: 0;

  .icon-active {
    width: 28px;
    height: 28px;
    fill: white;
    background-color: rgb(0, 77, 153);
    border-radius: 50%;
    border: 2px solid white;
  }
  @media screen and (min-width: 600px) {
    font-size: 32px;
    .icon-active {
      width: 36px;
      height: 36px;
    }
  }
`;
export const Completed = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: rgb(0, 77, 153);
  font-size: 28px;
  font-weight: 500;
  padding: 0;
  margin: 0;

  .icon-completed {
    width: 28px;
    height: 28px;
    fill: white;
    background-color: rgb(0, 77, 153);
    border-radius: 50%;
    border: 2px solid white;
  }
  @media screen and (min-width: 600px) {
    font-size: 32px;
    .icon-completed {
      width: 36px;
      height: 36px;
    }
  }
`;
