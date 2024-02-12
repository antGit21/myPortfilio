import { Space,Card,Carousel, Radio, Row ,Col, Watermark} from 'antd';
import React, { useState } from 'react';
import MyCard from './MyCard';

const Main = () => {
  const contentStyle={
    height: '200px',
    color: '#fff',
    background: '#0b0a5b',
    borderRadius:"100px"
  };
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
const skills=[
  {title:"javascript",slices:[{title:"electron",imageUrl:"../../ele.png"},
  {title:"nodejs",imageUrl:"../../node.png"},
  {title:"reactjs",imageUrl:"../../relo.png"},
  {title:"vuejs",imageUrl:"../../vuelo.png"},
  {title:"solidjs",imageUrl:"../../solid.png"},
  {title:"sveltejs",imageUrl:"../../sev.png"}
]},
  {title:"html",slices:[{title:"electron",imageUrl:""},{title:"electron",imageUrl:""},{title:"electron",imageUrl:""},{title:"electron",imageUrl:""}]},
  {title:"css",slices:[{title:"electron",imageUrl:""},{title:"electron",imageUrl:""},{title:"electron",imageUrl:""},{title:"electron",imageUrl:""}]},
  {title:"python",slices:[{title:"electron",imageUrl:""},{title:"electron",imageUrl:""},{title:"electron",imageUrl:""},{title:"electron",imageUrl:""}]},
  {title:"php",slices:[{title:"electron",imageUrl:""},{title:"electron",imageUrl:""},{title:"electron",imageUrl:""},{title:"electron",imageUrl:""}]},
  {title:"devops",slices:[{title:"electron",imageUrl:""},{title:"electron",imageUrl:""},{title:"electron",imageUrl:""},{title:"electron",imageUrl:""},{title:"electron",imageUrl:""},{title:"electron",imageUrl:""}]}
]

  return (
<div className='main'>

<Row justify="center" gutter={[16,16]}>
  {skills.map(v=>{
    return(
      <Col sm={{span:24}} md={{span:12}} lg={{span:12}} xl={{span:8}} key={v.title} >
      <MyCard data={v}/>
      </Col>
    )
  })}
    </Row>

    
     </div>
  


  );
}
export default Main
