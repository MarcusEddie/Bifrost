import { PageContainer } from '@ant-design/pro-layout';
// import { Input } from 'antd';
import { history } from 'umi';

const tabList = [
  {
    key: 'mindMap',
    // tab: (
    //   <span>
    //     {formatMessage({
    //       id: 'menu.caseMaintain.create.mindMap',
    //     })}
    //   </span>
    // ),
    tab: 'Mind Graph',
  },
  {
    key: 'single',
    // tab: (
    //   <span>
    //     {formatMessage({
    //       id: 'menu.caseMaintain.create.single',
    //     })}
    //   </span>
    // ),
    tab: 'Manual',
  },
];

const caseMaintain = (props) => {
  const handleTabChange = (key) => {
    const { match } = props;
    const url = match.url === '/' ? '' : match.url;

    switch (key) {
      case 'mindMap':
        history.push(`${url}/mindMap`);
        break;

      case 'single':
        history.push(`${url}/single`);
        break;

      default:
        break;
    }
  };

  const getTabKey = () => {
    const { match, location } = props;
    const url = match.path === '/' ? '' : match.path;
    const tabKey = location.pathname.replace(`${url}/`, '');

    if (tabKey && tabKey !== '/') {
      return tabKey;
    }

    return 'mindMap';
  };

  return (
    <PageContainer
      content={
        <div
          style={{
            textAlign: 'center',
          }}
        >
        </div>
      }
      tabList={tabList}
      tabActiveKey={getTabKey()}
      onTabChange={handleTabChange}
    >
      {props.children}
    </PageContainer>
  );
};

export default caseMaintain;
