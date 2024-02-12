import React from 'react';
import { Spin,Avatar, Badge, Button, } from 'antd';
import { JavaScriptOutlined } from '@ant-design/icons';
const Header = ({pop}) => {
  return (
    <header className='header'>
       <div className='img '><Badge  color='purple'></Badge><Avatar  size={75}  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${1}`} /></div>
        <nav>
         <a href="#"><Badge color='purple'/>skills</a>
            <a href="#"><Badge color='purple'/>hobbies</a>
            <a href="#"><Badge color='purple'/>friends</a>
            <a href="#"><Badge color='purple'/>about me</a>
            <a href="#"><Badge color='purple'/>{true&&<Spin size='large'/>}</a>
            <a href=""><JavaScriptOutlined /></a>
       
        </nav>
        <Button onClick={()=>pop(true)} color='blue' title='open' style={{display:"none"}}/>
          
    </header>
  );
}

export default Header;
