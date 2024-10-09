import React, {useEffect, useState} from 'react';
import {
    Layout,
    Breadcrumb,
    Image,
    Typography
} from '@douyinfe/semi-ui';
import {
    IconHelpCircle,
    IconBytedanceLogo,
    IconHome,
    IconHistogram,
    IconLive,
    IconSetting,
    IconLock, IconUnlock, IconCalendar, IconArticle,
} from '@douyinfe/semi-icons';

import "@douyinfe/semi-ui/dist/css/semi.css";
import {IllustrationSuccess, IllustrationSuccessDark} from "@douyinfe/semi-illustrations";
import Head from "next/head";

const HomeContent = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const {Title,Paragraph,Text} = Typography;
    return (
        <Content
            style={{
                padding: '24px',
                backgroundColor: 'var(--semi-color-bg-0)',
            }}
        >
            <Breadcrumb
                style={{
                    marginBottom: '24px',
                }}
                routes={
                    [
                        {
                            path: '/',
                            name:'blockvote',
                        },
                        {
                            path: '/home',
                            name: 'home',
                            icon: <IconHome size="small" />
                        },

                    ]
                }

            />
            <div
                style={{
                    borderRadius: '10px',
                    border: '1px solid var(--semi-color-border)',
                    height: '376px',
                    padding: '32px',
                }}
            >
                <div className="container" >
                    <Image
                        className="image"
                        width={360}
                        height={350}
                        src="../static/people.png"
                        style={{float:"right"}}
                    />
                   <h1 style={{textAlign:"center",color:"#E49E62",fontSize:"28px",backgroundColor:"#f9d580"}}>BLOCK VOTE</h1>
                    <div  style={{position: 'relative',marginLeft:"60px"}}>
                        <div style={{position: 'absolute',marginLeft:"600px",marginTop:"80px"}}>
                            <text style={{fontWeight:"700",color:"#b0d992"}}>👩🏻‍💻运行节点： 4</text>
                            <br/>
                            <br/>
                            <text style={{fontWeight:"700",color:"#b0d992"}}>📦️区块高度：160+</text>
                            <br/>
                            <br/>
                            <text style={{fontWeight:"700",color:"#b0d992"}}>📒链上交易：260+</text>
                        </div>
                        <div style={{marginLeft:"0px"}}>
                    <Title heading={2}>自我主权🔐</Title>
                    <text style={{fontSize:'18px',color:""}}>
                        使用私钥控制您的账户
                        <br></br>
                        不公开存储用户的密钥
                    </text>
                        </div>

                        <div style={{marginLeft:"120px"}}>
                    <Title heading={2}>全程可溯🕵️</Title>
                    <text style={{fontSize:'18px',color:""}}>
                        基于FISCO开源联盟链技术
                        <br></br>
                        投票全链留痕可溯源抗篡改
                    </text>
                        </div>

                        <div style={{marginLeft:"300px"}}>
                    <Title heading={2}>代码开源📃</Title>
                    <text style={{fontSize:'18px',color:""}}>
                        核心投票业务合约开源
                        <br></br>
                        透明 可信 可查询
                    </text>
                        </div>
                    </div>
                    <h1 id="title" style={{textAlign:'center' ,color:"#99b9e9"}}>🦄合约地址为：0xc7b22db2c09f08671670a2746fc3e15730c34bfe</h1>
                </div>
            </div>
        </Content>
    );
};

export default HomeContent;
