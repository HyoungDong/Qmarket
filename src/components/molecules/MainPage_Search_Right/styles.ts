import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: #e7713f;
  height: 100%;
  border-top-right-radius: 19.5px;
  border-bottom-right-radius: 19.5px;
  box-shadow: 10px 20px 20px gray;
`;

const ContentContainer = styled.div`
  width: 574px;
  height: 112px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #fdfdfd;
  text-align: left;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 15.5px;
  border-radius: 10px;
  width: 464px;
  height: 60px;
  border: solid 1.5px #fff;
  font-size: 17.5px;
  font-weight: normal;
  text-align: left;
  color: #fdfdfd;
  padding-left: 15px;
  box-sizing: border-box;
`;

const inputStyle = {
  width: '100%',
  background: 'transparent',
  placeholder: {
    color: '#fdfdfd',
    fontSize: '17.5px',
  },
};
export { Container, Title, ContentContainer, InputContainer, inputStyle };
