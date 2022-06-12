import {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
  ActionFunction,
  json,
} from "@remix-run/node";
import { Button, Checkbox, Form, Input, Tabs } from "antd";
import { LockOutlined, UserOutlined, WechatOutlined } from "@ant-design/icons";
import style from "~/styles/auth/login.css";
import { useFetcher } from "@remix-run/react";
import services from "~/services";
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
  return null;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const data: Record<string, any> = {};
  form.forEach((value, key) => {
    data[key] = value;
  });
  const res = await services.user.login(data);
  return null;
};

export default function Login() {
  const fetcher = useFetcher();
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
            onFinish={(val) => {
              fetcher.submit(val, { method: "post" });
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
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={fetcher.state !== "idle"}
              >
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
