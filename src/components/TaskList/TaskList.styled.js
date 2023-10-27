import styled from 'styled-components';

export const WrapList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 360px;
  gap: 5px;
  padding: 0;
  margin: 0;
  /* margin-top: 0;
  margin-bottom: 0; */
  @media screen and (min-width: 600px) {
    flex-direction: column;
    width: 600px;
  }
`;

export const WrapTask = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 4px 8px;
  gap: 10px;
  min-width: 360px;
  padding: 10px;
  /* margin-left: auto;
  margin-right: auto; */

  @media screen and (min-width: 600px) {
    width: 600px;
    padding: 8px 16px;
    gap: 15px;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: block;
  background-color: blue;
  border-radius: 2px;
  outline: 3px solid rgb(77, 106, 255);
  width: 28px;
  height: 28px;
  cursor: pointer;
  -webkit-box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.75);

  &:autofill {
    border: 3px solid darkorange;
  }
  &:-webkit-autofill {
    border: 3px solid darkorange;
  }
  .input[type='checkbox']:checked {
    background-color: green;
  }

  @media screen and (min-width: 600px) {
    width: 36px;
    height: 36px;
  }
`;

export const TextTask = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(77, 106, 255);
  color: white;
  min-width: 270px;
  height: 30px;
  border-radius: 10px;
  border: 3px solid rgb(77, 106, 255);
  -webkit-box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.75);
  padding: 4px 8px;
  margin: 0;
  .text {
    display: inline-block;
    width: 270px;
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    padding: 0;
  }

  ${props => {
    switch (props.$mode) {
      case 'dark':
        return `
          background-color: white;
          color:  rgb(0, 77, 153);
          ${Checkbox}:checked + && {
          background-color:  rgb(77, 106, 255);
              color: white;
          }
        `;
      default:
        return `
          background-color: white;
          color: rgb(0, 77, 153);
          ${Checkbox}:checked + && {
            background-color:  rgb(77, 106, 255);
            color: white;
          }
        `;
    }
  }}

  @media screen and (min-width: 600px) {
    min-width: 450px;
    padding: 8px 16px;
    .text {
      width: 450px;
      font-size: 20px;
    }
  }
`;
export const BtnDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 3px solid rgb(77, 106, 255);
  width: 36px;
  height: 36px;
  padding: 0;
  cursor: pointer;
  -webkit-box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.75);
  &:hover,
  :focus {
    background-color: rgb(77, 106, 255);
  }

  .icon-delete {
    width: 24px;
    height: 24px;
    fill: rgb(77, 106, 255);
  }
  .icon-delete:hover,
  .icon-delete:focus {
    fill: white;
  }
  @media screen and (min-width: 600px) {
    width: 44px;
    height: 44px;
    .icon-delete {
      width: 28px;
      height: 28px;
    }
  }
`;
