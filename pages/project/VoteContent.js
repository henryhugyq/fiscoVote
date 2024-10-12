import React, {useEffect, useState} from 'react';
import {
    Layout,
    Nav,
    Button,
    Breadcrumb,
    Avatar,
    ButtonGroup,
    List,
    Typography,
    Dropdown,
    Toast,
    Popover,
    Empty,
    Image, Steps,
} from '@douyinfe/semi-ui';
import {
    IconHelpCircle,
    IconBytedanceLogo,
    IconHome,
    IconHistogram,
    IconLive,
    IconSetting,
    IconLock, IconUnlock, IconCalendar, IconLink, IconPuzzle,
} from '@douyinfe/semi-icons';

import "@douyinfe/semi-ui/dist/css/semi.css";
import {IllustrationSuccess, IllustrationSuccessDark} from "@douyinfe/semi-illustrations";
import Head from "next/head";

const VoteContent = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const {Title,Paragraph,Text} = Typography;
    const data = [
        // eslint-disable-next-line react/jsx-key
        <p
            style={{
                color: 'var(--semi-color-text-2)',
                margin: '4px 0',
                width: 500,
            }}
        >
            链上地址：0xc13fc67f57046a56252ef63ded46eb9540ef0292
            <br/>
            候选者1是22级一班的班长李花花，认真负责，关心同学
        </p>,
        // eslint-disable-next-line react/jsx-key
        <p style={{ color: 'var(--semi-color-text-2)', margin: '4px 0', width: 500 }}>
            链上地址：0x34793fb8cb95f34c43502957fcdbaeb72fe00173
            <br/>
            候选者2是22级二班的学委王宝宝，成绩优异，蝉联第一
        </p>,
        // eslint-disable-next-line react/jsx-key
        <p style={{ color: 'var(--semi-color-text-2)', margin: '4px 0', width: 500 }}>
            链上地址：0x9f53c48348740c8978f7605a5b1117a7630f8d00
            <br/>
            候选者3是22级三班的体委牛奔奔，长跑冠军，活力四射
        </p>,
    ];
    //临时测试
    const address = ["0xc13fc67f57046a56252ef63ded46eb9540ef0292","0x34793fb8cb95f34c43502957fcdbaeb72fe00173","0x9f53c48348740c8978f7605a5b1117a7630f8d00"];
    const voteCandidate = async (address) => {
        // const address = document.getElementById('addressInput').value;
        const response = await fetch('http://47.98.204.52:8080/api/vote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ address }),
        });
        const data = await response.json();
        let opts = {
            content: 'Vote Successful!Transaction hash is:  '+data.tx,
            duration: 2,
            theme: 'light',
        };
        Toast.success(opts);
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
                            path: '/vote',
                            name: 'vote',
                            icon: <IconPuzzle size="small" />
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
                    <div style={{ padding: 8, border: '1px solid var(--semi-color-border)', margin: 12 }}>
                        <List
                            dataSource={data}
                            renderItem={(item,index) => (
                                <List.Item
                                    header={<Avatar
                                        src="../static/votecat.jpg"

                                    />}
                                    main={
                                        <div>
                                            <span style={{ color: 'var(--semi-color-text-0)', fontWeight: 500 }}>描述</span>
                                            {item}
                                        </div>
                                    }
                                    extra={
                                        <ButtonGroup theme="borderless">
                                            <Button onClick={() => voteCandidate(address[index])}>投票</Button>
                                            <Button>更多</Button>
                                        </ButtonGroup>
                                    }
                                />
                            )}
                        />
                    </div>
                    <Steps type="basic" current={1} onChange={(i)=>console.log(i)}>
                        <Steps.Step title="投票" description="仔细核对地址和描述" />
                        <Steps.Step title="等待上链" description="所有结果记录在链上" />
                        <Steps.Step title="查询" description="在浏览器查证交易哈希" />
                    </Steps>
                    <h1 id="title" style={{textAlign:'center' ,color:"#f4a016"}}>🌻请认真投出您宝贵的一票，前往浏览器查询上链情况<Text link={{href:'http://114.55.5.198:5100/#/home'}} icon={<IconLink />} underline></Text></h1>
                    <p></p>

                </div>
            </div>
        </Content>
    );
};

export default VoteContent;
