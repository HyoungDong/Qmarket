import styled from 'styled-components';

type PlaceHolderProps = {
  value?: string;
};

const Container = styled.div`
  width: 600px;
  height: 104px;
  user-select: none;
`;
const IDContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  background: #fbfbfb;
  height: 48px;
  margin-bottom: 8px;
  border: solid 0.5px #cbcbcb;
`;
const PWContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  background: #fbfbfb;
  height: 48px;
  border: solid 0.5px #cbcbcb;
`;
const PlaceHolder = styled.span<PlaceHolderProps>`
  position: absolute;
  top: 15px;
  left: 20px;
  font-weight: bold;
  font-size: 14px;
  color: #a8a8a8;
  opacity: 0.8;
  transition: 0.3s;
  user-select: none;
  transform: ${props => (props?.value ? 'translate(0,-13px)' : '')};
`;
const inputStyle = {
  fontSize: '14px',
  width: '100%',
  padding: '15px 20px 5px 20px',
  color: '#a8a8a8',
  focused: {
    transform: 'translate(0,-13px)',
    fontSize: '14px',
  },
};

export { Container, IDContainer, PWContainer, inputStyle, PlaceHolder };
