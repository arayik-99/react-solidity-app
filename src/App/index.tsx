import { Button, Typography, Layout as DefaultLayout } from 'antd';
import { useEthers } from '@usedapp/core';
import Layout from '../Components/Layout';
import { HeaderContainer, MetamaskButtonContainer } from './styles';

const { Title } = Typography;
const { Content } = DefaultLayout;

const App = () => {
  const { account, activateBrowserWallet } = useEthers();
  return (
    <DefaultLayout>
      <Content>
        <MetamaskButtonContainer>
          <Button
            disabled={!!account}
            type='primary'
            onClick={() => activateBrowserWallet()}
          >
            Connect To Metamask
          </Button>
        </MetamaskButtonContainer>
        <HeaderContainer>
          <Title>Todo DApp</Title>
        </HeaderContainer>
        <Layout />
      </Content>
    </DefaultLayout>
  );
};

export default App;
