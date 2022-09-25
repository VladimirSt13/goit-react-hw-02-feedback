import { List } from './Statistics.styled';

export const Statistics = ({ stats, total, positivePercentage }) => (
  <List>
    {Object.keys(stats).map(key => (
      <li key={key}>
        {key}: {stats[key]}
      </li>
    ))}
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage}%</li>
  </List>
);
