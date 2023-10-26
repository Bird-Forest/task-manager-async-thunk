import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 360px;
  gap: 20px;
  padding: 20px;
  /* margin: 0 auto; */
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;
export const TopNavigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-width: 360px;
  /* margin-left: auto;
  margin-right: auto; */
  padding: 0;
  margin: 0;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;
export const WrapFormTask = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-width: 360px;
  padding: 0;
  /* margin-left: auto;
  margin-right: auto; */
  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;
