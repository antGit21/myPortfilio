import React from 'react';
import { Avatar, Card,Carousel,Badge,Empty } from 'antd';

const MyCard = ({data,children}) => {
  const contentStyle={
    height: 'auto',
    color: '#fff',
    background: '#000',
  };

  return (
    <Card title={data.title} >
    <Carousel dotPosition={"right"}>
      {data.slices.map(d=>{
        return(
          <div key={d.title}>
          <div style={contentStyle}>
            {console.log(d.imageUrl)}
            <img src={d.imageUrl} alt="" width={"76px"} height={"76px"} />
           <Empty description={<h1 style={{color:"white"}}>?</h1>}/>
          </div>
         </div>
        )
      })}
          </Carousel> 
           </Card>
  );
}

export default MyCard;
