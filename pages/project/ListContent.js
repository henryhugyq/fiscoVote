import React, {useEffect, useState} from 'react';
import {
    Layout,
    Nav,
    Button,
    Breadcrumb,
    Steps,
    Avatar,
    Dropdown,
    Toast,
    Popover,
    Empty,
    Image, Card, Col, Row,
} from '@douyinfe/semi-ui';
import {
    IconHelpCircle,
    IconBytedanceLogo,
    IconHome,
    IconHistogram,
    IconLive,
    IconSetting,
    IconLock, IconUnlock, IconCalendar, IconBeaker,
} from '@douyinfe/semi-icons';


import "@douyinfe/semi-ui/dist/css/semi.css";
import {IllustrationSuccess, IllustrationSuccessDark} from "@douyinfe/semi-illustrations";
import Head from "next/head";

const ListContent = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const allCandidate = async () => {
        const response = await fetch('http://114.55.5.198:8080/api/all',{
            method:'POST',
        });
        const data = await response.json()
        let opts = {
            content: 'The All CandidateAddress are:  '+data.all,
            duration: 2,
            theme: 'light',
        };
        Toast.info(opts)
    }

    const getWinner = async () => {
        const response = await fetch('http://114.55.5.198:8080/api/winner',{
            method:'POST',
        });
        const data = await response.json()
        let opts = {
            content: 'The Winner Address is:  '+data.winnerAddress,
            duration: 2,
            theme: 'light',
        };
        Toast.success(opts)
    }

    const getVoteStatus = async () => {
        const response = await fetch('http://114.55.5.198:8080/api/status',{
            method:'POST',
        });
        const data = await response.json()
        Toast.info({content:"The voteStatus is "+data.status} )
    }

    const closeVoting = async () => {
        const response = await fetch('http://114.55.5.198:8080/api/close',{
            method:'POST',
        });
        const data = await response.json()
        let opts = {
            content: 'Close Successful!Transaction hash is:  '+data.tx,
            duration: 2,
            theme: 'light',
        };
        Toast.success(opts)
    }

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
                            path: '/list',
                            name: 'list',
                            icon: <IconBeaker size="small" />
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
                <div className="container">
                    <div style={{marginLeft:"75px"}}>
                    <div
                        style={{
                            display: 'inline-block',
                            padding: 20,
                            backgroundColor: '#cad3c3',
                            marginRight:"10px",

                        }}
                    >
                        <Card
                            style={{ maxWidth: 300 }}
                            bordered={false}
                            headerLine={true}
                            title='谁是赢家✌'

                        >
                          投票结束后，点击此按钮查看投票结果，将从链上返回一个累计获得选票数最大的地址
                            <br/>
                            <Button theme='light' type='secondary' style={{ marginRight: 8, color:"rgba(var(--semi-green-1), 1)"}} onClick={getWinner}>Winner</Button>
                        </Card>
                    </div>
                    <div
                        style={{
                            display: 'inline-block',
                            padding: 20,
                            backgroundColor: '#b0a4e3',
                            marginRight:"10px"
                        }}
                    >
                        <Card
                            style={{ maxWidth: 300 }}
                            bordered={false}
                            headerLine={true}
                            title='查询候选者🔍'

                        >
                           点击此按钮，将会返回一个从链上读取的候选者地址集合，有助于您判断前端界面展示的候选地址的有效性和真实性
                            <br/>
                            <Button theme='light' type='secondary' style={{ marginRight: 8 ,color:"rgba(var(--semi-violet-1), 1)"} } onClick={allCandidate} >Candidate</Button>
                        </Card>
                    </div>
                    <div
                        style={{
                            display: 'inline-block',
                            padding: 20,
                            backgroundColor: '#eeb8c3'
                        }}
                    >
                        <Card
                            style={{ maxWidth: 300 }}
                            bordered={false}
                            headerLine={true}
                            title='投票状态🍀'

                        >
                           点击此按钮查询投票是否开启，将从链上读取投票状态，若结果为TRUE则投票开启，反之关闭不可投票
                            <br/>
                            <Button theme='light' type='secondary' style={{ marginRight: 8,color:"rgba(var(--semi-pink-1), 1)" }} onClick={getVoteStatus}>Status</Button>
                        </Card>
                    </div>
                    </div>
                    <h1 id="title" style={{textAlign:'center' ,color:"rgba(var(--semi-red-4), 1)"}}>🔝管理员地址为：0x6e17ead1c82329c175f7a97ff9660ed09d2cf071</h1>
                    <h3 id="title" style={{textAlign:'center' ,color:"rgba(var(--semi-red-3), 1)"}}>⚠️投票的初始化/关闭只能由管理员调用</h3>
                    <Button theme='light' type='secondary'  size='large' style={{ marginLeft: 550,color:"rgba(var(--semi-orange-3), 1)" }} onClick={closeVoting}>关闭投票</Button>
                </div>
            </div>
        </Content>
    );
};

export default ListContent;
