import styled from 'styled-components';

export const OptionsList = styled.ul`
  display: flex;

  gap: 10px;
`;

export const OptionsListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const OptionsListBtn = styled.button`
  padding: 5px 10px;
  width: 100px;
  border-radius: 5px;
  color: white;
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
