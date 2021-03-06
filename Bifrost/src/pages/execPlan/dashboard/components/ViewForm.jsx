/* eslint-disable no-else-return */
import React from 'react';
import { Modal, Card } from 'antd';
import GeneralCaseInfo from './GeneralCaseInfo';
import APICasesDetails from './APICasesDetails';
import { useIntl } from 'umi';
import UiCasesDetails from './UiCasesDetails';

const ViewForm = (props) => {

  const [activeTapKey, setActiveTapKey] = React.useState('basicInfo');
  const intl = useIntl();

  const tabListNoTitle = [
    {
      key: 'basicInfo',
      tab: intl.formatMessage({ id: 'pages.execPlan.basic.info', }),
    },
    {
      key: 'caseInfo',
      tab: intl.formatMessage({ id: 'pages.execPlan.case.info', }),
    },
  ];

  const renderInfoBlockByTabKey = (tabValue) => {
    if (tabValue === 'basicInfo') {
      return <GeneralCaseInfo info={props.generalCase} values={props.values || []} />;
    }

    window.console.log(props.values);

    if (tabValue === 'caseInfo' && props.values.testType === "API_Test") {
      const priority = new Map();
      priority.set('P1', 'red');
      priority.set('P2', 'yellow');
      priority.set('P3', 'blue');
      priority.set('P4', 'green');
      return <APICasesDetails prio={priority} values={props.values || {}} />;
    } else if (tabValue === 'caseInfo' && props.values.testType === "UI_Auto_Test") {
      const priority = new Map();
      priority.set('P1', 'red');
      priority.set('P2', 'yellow');
      priority.set('P3', 'blue');
      priority.set('P4', 'green');
      return <UiCasesDetails prio={priority} values={props.values || {}} />;
    }

    return null;
  };

  return (
    <Modal
      title={`${intl.formatMessage({ id: 'pages.caseMaintain.dashboard.actions.view', })}${intl.formatMessage({ id: 'pages.uiTest.dashboard.action.viewDetails', })}`}
      width="1200px"
      visible={props.viewModalVisible}
      onCancel={() => {
        setActiveTapKey('basicInfo');
        props.onCancel();
      }}
      destroyOnClose={true}
      footer={null}
    >
      <Card
        style={{ width: '100%', height: 800 }}
        tabList={tabListNoTitle}
        bordered={false}
        activeTabKey={activeTapKey}
        onTabChange={(key) => {
          setActiveTapKey(key);
        }}
      >
        {renderInfoBlockByTabKey(activeTapKey)}
      </Card>
    </Modal>
  );
};

export default ViewForm;
