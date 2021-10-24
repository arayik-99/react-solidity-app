import { Card, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

interface StyledTitleProps {
  completed: boolean;
}

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DefaultCard = styled(Card)`
  width: 500px;
`;

export const StyledTitle = styled(Title)<StyledTitleProps>`
  text-decoration: ${(props) => (props.completed ? 'line-through' : '')};
`;
