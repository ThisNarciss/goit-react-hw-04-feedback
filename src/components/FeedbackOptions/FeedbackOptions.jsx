import PropTypes from 'prop-types';

import {
  OptionsList,
  OptionsListItem,
  OptionsListBtn,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => {
        return (
          <OptionsListItem key={option}>
            <OptionsListBtn
              variant={option}
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option[0].toUpperCase() + option.slice(1, option.length)}
            </OptionsListBtn>
          </OptionsListItem>
        );
      })}
    </OptionsList>
  );
};

Notification.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
