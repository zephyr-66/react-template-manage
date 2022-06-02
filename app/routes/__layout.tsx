import React, { useState } from "react";
import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Breadcrumb, Layout, Menu } from "antd";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
import style from "~/styles/layout.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: style }];
};

const { Header, Sider, Content } = Layout;
export default function Index() {
    const [collapsed, setCollapsed] = useState(false);
    const toPath = () => {};
    return (
        <Layout className="home-page">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    onClick={toPath}
                    items={[
                        {
                            key: "1",
                            icon: <UserOutlined />,
                            label: "nav 1",
                        },
                        {
                            key: "2",
                            icon: <VideoCameraOutlined />,
                            label: "nav 2",
                        },
                        {
                            key: "3",
                            icon: <UploadOutlined />,
                            label: "nav 3",
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header className="home-page-header">
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed),
                        }
                    )}
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}
