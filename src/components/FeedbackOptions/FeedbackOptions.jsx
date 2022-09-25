import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(key => (
    <Button key={key} onClick={() => onLeaveFeedback(key)}>
      {key}
    </Button>
  ));
