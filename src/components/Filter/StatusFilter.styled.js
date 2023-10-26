import styled from 'styled-components';
export const WrapFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 15px;
  padding: 10px;
  min-width: 360px;
  background-color: rgb(179, 229, 255);
  -webkit-box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.75);

  @media screen and (min-width: 600px) {
    width: 580px;
  }
`;
export const TitleFilter = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: rgb(0, 77, 153);
  padding: 0;
  margin: 0;

  @media screen and (min-width: 600px) {
    font-size: 28px;
  }
`;
export const WrapBtn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 240px;
  /* height: 50px; */
  @media screen and (min-width: 600px) {
    height: 50px;
  }
`;
export const BtnAll = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  gap: 10px;
  background-color: rgb(179, 229, 255);
  border: 1px solid white;
  cursor: pointer;
  padding: 0;
  margin: 0;

  .icon-btn-all {
    width: 28px;
    height: 28px;
    fill: white;
    background-color: rgb(0, 77, 153);
    border-radius: 50%;
    border: 2px solid white;
  }
  .icon-btn-all:hover,
  .icon-btn-all:focus {
    fill: rgb(77, 106, 255);
    border: 2px solid rgb(77, 106, 255);
    background-color: white;
  }
  @media screen and (min-width: 600px) {
    .icon-btn-all {
      width: 36px;
      height: 36px;
    }
  }
`;
export const BtnActive = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  gap: 10px;
  background-color: rgb(179, 229, 255);
  border: 1px solid white;
  cursor: pointer;
  padding: 0;
  margin: 0;

  .icon-btn-active {
    width: 28px;
    height: 28px;
    fill: white;
    background-color: rgb(0, 77, 153);
    border-radius: 50%;
    border: 2px solid white;
  }
  .icon-btn-active:hover,
  .icon-btn-active:focus {
    fill: rgb(77, 106, 255);
    border: 2px solid rgb(77, 106, 255);
    background-color: white;
  }
  @media screen and (min-width: 600px) {
    .icon-btn-active {
      width: 36px;
      height: 36px;
    }
  }
`;
export const BtnCompleted = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  gap: 10px;
  background-color: rgb(179, 229, 255);
  border: 1px solid white;
  cursor: pointer;
  padding: 0;
  margin: 0;

  .icon-btn-ended {
    width: 28px;
    height: 28px;
    fill: white;
    background-color: rgb(0, 77, 153);
    border-radius: 50%;
    border: 2px solid white;
  }
  .icon-btn-ended:hover,
  .icon-btn-ended:focus {
    fill: rgb(77, 106, 255);
    border: 2px solid rgb(77, 106, 255);
    background-color: white;
  }
  @media screen and (min-width: 600px) {
    .icon-btn-ended {
      width: 36px;
      height: 36px;
    }
  }
`;
