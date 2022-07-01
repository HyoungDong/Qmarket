import styled from 'styled-components';

type Props = {
  Style?: {
    display?: string;
    padding?: string;
    margin?: string;
    fontSize?: string;
    background?: string;
    borderRadius?: string;
    border?: string;
    width?: string;
    height?: string;
    flex?: string;
    focused?: {
      transform?: string;
      fontSize?: string;
      transition?: string;
    };
    placeholder?: {
      fontStyle?: string;
      opacity?: string;
      color?: string;
      fontWeight?: string;
    };
  };
};

const InputArea = styled.input<Props>`
  display: ${props => props?.Style?.display};
  outline: 0;
  border: 0;
  resize: none;
  padding: ${props => props?.Style?.padding};
  margin: ${props => props?.Style?.margin};
  font-size: ${props => props?.Style?.fontSize || '20px'};
  box-sizing: border-box;
  background: ${props => props?.Style?.background};
  border-radius: ${props => props?.Style?.borderRadius};
  border: ${props => props?.Style?.border};
  width: ${props => props?.Style?.width};
  flex: ${props => props?.Style?.flex};
  &:focus + span {
    transform: ${props => props?.Style?.focused?.transform};
    font-size: ${props => props?.Style?.focused?.fontSize};
    transition: 0.3s;
  }
  &::placeholder {
    font-style: ${props => props?.Style?.placeholder?.fontStyle || 'noraml'};
    opacity: ${props => props?.Style?.placeholder?.opacity || '1'};
    color: ${props => props?.Style?.placeholder?.color || 'black'};
    font-weight: ${props => props?.Style?.placeholder?.fontWeight || 'normal'};
  }
`;

export default InputArea;
