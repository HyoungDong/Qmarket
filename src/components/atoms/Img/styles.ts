import styled from 'styled-components';

type Props = {
  Style?: {
    width?: string;
    height?: string;
    objectFit?: string;
    borderRadius?: string;
    textIndent?: string;
    border?: string;
    minHeight?: string;
    maxWidth?: string;
    verticalAlign?: string;
    margin?: string;
    filter?: string;
  };
};
const Image = styled.img<Props>`
  width: ${props => props.Style?.width || ''};
  height: ${props => props.Style?.height || ''};
  object-fit: ${props => props.Style?.objectFit || ''};
  border-radius: ${props => props.Style?.borderRadius || ''};
  text-indent: ${props => props.Style?.textIndent || ''};
  border: ${props => props.Style?.border || ''};
  min-height: ${props => props.Style?.minHeight || ''};
  max-width: ${props => props.Style?.maxWidth || ''};
  vertical-align: ${props => props.Style?.verticalAlign || ''};
  margin: ${props => props.Style?.margin || ''};
  filter: ${props => props.Style?.filter || ''};
`;

export default Image;
