import { useEffect, useState } from 'react'

import { Card,Badge,DatePicker,Select,Watermark, Space, Drawer,List,Avatar, Spin,} from 'antd'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import './app.css'


function App() {
  const [loading,setloading]=useState(true)
  const [op, setop] = useState(true)
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  useEffect(()=>{
    setTimeout(()=>setloading(false),5000)

  },[])

  return (
    <section className='app'>
    
<Drawer  open={op} onClose={()=>setop(false)} title={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=1`} />}>
<List 
    itemLayout="horizontal"
  
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
  </Drawer>
<Watermark content="ant's portofolio">
<Header pop={setop}/>

      
{loading?<div style={{textAlign:"center",width:"120px",height:"120px",background:"#fff", position:"fixed",top:"200px", left:"50%",zIndex:10}}><Spin size='large'/></div>:<Main />}

<Footer></Footer>
</Watermark>
      </section>
  )
}

export default App
