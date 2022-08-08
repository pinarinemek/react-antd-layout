import React from 'react';
import './App.css';
import Title from 'antd/lib/typography/Title';
import { Layout , Avatar } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Menu , Breadcrumb } from 'antd';



const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
     <Layout>
     <Header style={{padding : 10 }}>
     <Avatar style={{float : 'right' }} src= './dog.png' />
     <Title style = {{color : 'white' , paddingLeft: 20}} level={3}>Team 8</Title>
     </Header >
     <Layout> <Sider >
     <Menu>
<Menu.Item key= 'dashboard' >
  Dashboard
</Menu.Item>
<SubMenu>
  <Menu.ItemGroup key= 'about US' Title = 'About US'>
    <Menu.Item key= 'location 1' > Location 1 </Menu.Item>
    <Menu.Item key= 'location 2' > Location 2 </Menu.Item>
  </Menu.ItemGroup>
</SubMenu>
     </Menu>

     </Sider> 
     <Layout>
        
         <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard2</Breadcrumb.Item>
       
      </Breadcrumb>
      <div style={{background : '#fff' , padding : 24 , minHeight : 580 }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design Exampla Created by pinar </Footer>
      </Layout>
     </Layout>
      
     
    </Layout>
    </div>
  );
}

export default App;
