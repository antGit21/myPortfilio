import React from 'react';
import { List,Avatar, Row, Col } from 'antd';
import { FacebookFilled,MailTwoTone,LinkedinFilled,TwitterCircleFilled,GithubFilled } from '@ant-design/icons';
const Footer = () => {
  const data = [
  {
    title: 'Ant Design Title 1',
    icon:<FacebookFilled style={{fontSize:"4rem",color:"blueviolet"}}/>
  },
  {
    title: 'Ant Design Title 2',
    icon:<MailTwoTone style={{fontSize:"4rem",color:"#4ed"}}/>

  },
  {
    title: 'Ant Design Title 3',
    icon:<LinkedinFilled style={{fontSize:"4rem", color:"purple"}}/>
  },
  {
    title: 'Ant Design Title 4',
    icon:<TwitterCircleFilled style={{fontSize:"4rem", color:"#sky"}}/>
  },
];
  return (
  <footer style={{textAlign:"center"}}>
 {/*<List
    itemLayout="verical"

    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={item.icon}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
    />*/}

  <Row justify={"center"}>
     <Col span={24} sm={{span:12}} lg={{span:6}} style={{fontSize:"5rem"}}>
      <a href='https://facebook.com/fisshatsyon.haileamlak'><FacebookFilled/>
      </a></Col>
     <Col span={24} sm={{span:12}} lg={{span:6}} style={{fontSize:"5rem"}}>
      <a href='mailto:fhaileamlak@gmail.com'><MailTwoTone/></a></Col>
     <Col span={24} sm={{span:12}} lg={{span:6}} style={{fontSize:"5rem"}}>
      <a><LinkedinFilled/></a></Col>
     <Col span={24} sm={{span:12}} lg={{span:6}} style={{fontSize:"5rem"}}>
      <a href='https://github.com/antGit21'><GithubFilled/></a>
      </Col>
  </Row>
  </footer>
  );
}

export default Footer;
