import {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  json,
  redirect,
} from "@remix-run/node";
import { Button, Checkbox, Form, Input, Tabs } from "antd";
import { LockOutlined, UserOutlined, WechatOutlined } from "@ant-design/icons";
import style from "~/styles/auth/login.css";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { storage } from "~/sessions";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: style }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "登录",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ request }) => {
  const session = await storage.getSession();
  session.set("token", "123456");
  const a = await storage.commitSession(session);
  // return redirect("/", {
  //   headers: {
  //     "Set-Cookie": a,
  //   },
  // });
  return null;
};

export default function Login() {
  const loading = false;
  const navigate = useNavigate();
  const run = async (v: any) => {};
  return (
    <div className="login-page">
      <div className="login-page-container">
        <div className="title">管理平台</div>
        <div className="sub-title">Campus Services 让管理更简单</div>
        <div>
          <Tabs centered>
            <Tabs.TabPane tab="账户密码登录" key="pwd" />
            <Tabs.TabPane tab="手机号登录" key="phone" />
          </Tabs>
          <Form
            onFinish={(values) => {
              run(values);
            }}
          >
            <Form.Item
              name="userName"
              rules={[{ required: true, message: "请输入用户名" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>

              <a style={{ float: "right" }} href="">
                忘记密码 ?
              </a>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block loading={loading}>
                登录
              </Button>
            </Form.Item>
          </Form>
          <div>
            <span>其他登录方式 :</span>
            <WechatOutlined key="WeiboCircleOutlined" className="other-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
