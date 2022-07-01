import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 270px;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 670px;
  height: 100%;
  border-top: solid 0.5px #cbcbcb;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
`;
const imgStyle = {
  width: '80px',
  height: '20px',
  margin: '0 12px 0 0',
};
export { Container, ContentContainer, Content, imgStyle };
