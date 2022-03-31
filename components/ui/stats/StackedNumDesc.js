import styled from "styled-components";

const TopNumber = styled.h3`
  font-size: 2rem;
  color: white;
  margin: 0.3rem;
`;

const Description = styled.h4`
  font-size: 1rem;
  color: var(--theme-primary);
  margin: 0.3rem;
`

const StackedNumDesc = (props) => {
  const {number, description}
  return (
    <div>
      <TopNumber>{number}</TopNumber>
      <Description>{Description}</Description>
    </div>
  );
};

export default StackedNumDesc;
