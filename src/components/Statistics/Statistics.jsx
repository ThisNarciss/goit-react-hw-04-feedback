import PropTypes from 'prop-types';

import { StatList, StatListItem } from './Statistics.styled';

export const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  const [goodVar, neutralVar, badVar] = Object.keys(props);
  return (
    <StatList>
      <StatListItem variant={goodVar}>
        <p>Good:</p>
        <p>{good}</p>
      </StatListItem>
      <StatListItem variant={neutralVar}>
        <p>Neutral:</p>
        <p>{neutral}</p>
      </StatListItem>
      <StatListItem variant={badVar}>
        <p>Bad:</p>
        <p>{bad}</p>
      </StatListItem>
      <StatListItem>
        <p>Total:</p>
        <p>{total}</p>
      </StatListItem>
      <StatListItem>
        <p>Positive feedback:</p>
        <p>{positivePercentage}%</p>
      </StatListItem>
    </StatList>
  );
};

Notification.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
