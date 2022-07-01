import styled from 'styled-components';

type Props = {
  Style?: {
    width?: string;
    height?: string;
    background?: string;
    color?: string;
    fontSize?: string;
    margin?: string;
  };
};
const Button = styled.button<Props>`
  width: ${props => props.Style?.width || ''};
  height: ${props => props.Style?.height || ''};
  background: ${props => props.Style?.background || ''};
  color: ${props => props.Style?.color || ''};
  font-size: ${props => props.Style?.fontSize || ''};
  margin: ${props => props.Style?.margin || ''};
  outline: none;
  border: 0;
  user-select: none;
  cursor: pointer;
`;

export default Button;
