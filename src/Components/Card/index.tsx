import { Checkbox } from 'antd';
import { CardContainer, DefaultCard, StyledTitle } from './styles';

interface CardProps {
  name: string;
  owner: string;
  completed: boolean;
  index: number;
  completeTodo: (index: number) => void;
}

const Card = (props: CardProps) => {
  debugger
  const { name, owner, completed, index, completeTodo } = props;

  return (
    <DefaultCard title={`Owner: ${owner}`}>
      <CardContainer>
        <StyledTitle completed={completed}>{name}</StyledTitle>
        <Checkbox
          onClick={() => completeTodo(index)}
          disabled={completed}
          checked={completed}
        />
      </CardContainer>
    </DefaultCard>
  );
};

export default Card;
