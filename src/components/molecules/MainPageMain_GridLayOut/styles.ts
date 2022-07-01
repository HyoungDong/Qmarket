import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  width: calc(100% - 600px);
  margin: 80px auto 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(377px, 1fr));
  gap: 34.5px 63.5px;
`;
export { Container };
