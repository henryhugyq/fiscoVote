import React, {useEffect, useState} from 'react';
import {
    Layout,
    Nav,
    Button,
    Breadcrumb,
    Avatar,
    Dropdown,
    Toast,
    Popover,
    Empty,
    Image,
} from '@douyinfe/semi-ui';
import {
    IconHelpCircle,
    IconBytedanceLogo,
    IconHome,
    IconHistogram,
    IconLive,
    IconSetting,
    IconLock, IconUnlock, IconCalendar, IconGift,
} from '@douyinfe/semi-icons';
import { ethers } from 'ethers';

import "@douyinfe/semi-ui/dist/css/semi.css";
import {
    IllustrationConstruction,
    IllustrationConstructionDark,
    IllustrationSuccess,
    IllustrationSuccessDark
} from "@douyinfe/semi-illustrations";
import Head from "next/head";

const SettingContent = () => {
    const { Header, Footer, Sider, Content } = Layout;
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
                            path: '/setting',
                            name: 'setting',
                            icon: <IconSetting size="small" />
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
                    <Empty
                        image={<IllustrationConstruction style={{ width: 150, height: 150 }} />}
                        darkModeImage={<IllustrationConstructionDark style={{ width: 150, height: 150 }} />}
                        title={'功能建设中'}
                        description="当前功能暂未开放，敬请期待。"
                    />
                </div>
            </div>
        </Content>
    );
};

export default SettingContent;
