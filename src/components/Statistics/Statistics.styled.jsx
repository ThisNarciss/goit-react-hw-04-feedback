import styled from 'styled-components';

export const StatList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StatListItem = styled.li`
  width: 300px;
  display: flex;
  border: 2px solid black;
  padding: 5px 10px;

  justify-content: space-between;
  color: ${props => {
    switch (props.variant) {
      case 'good':
        return 'white';

      case 'neutral':
        return 'white';

      case 'bad':
        return 'white';

      default:
        return 'inherit';
    }
  }};
  background-color: ${props => {
    switch (props.variant) {
      case 'good':
        return 'green';

      case 'neutral':
        return 'blue';

      case 'bad':
        return 'red';

      default:
        return 'inherit';
    }
  }};
`;
