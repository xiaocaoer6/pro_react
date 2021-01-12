import React, { Component } from 'react'
import logo from '../../assets/logogif.gif'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less'

const Login = () => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const psdValidate = (rule, value) => {
    if (!value ) {
      return Promise.reject('请输入密码！');
    }else if (value.length < 4 || value.length > 12 ){
      return Promise.reject('密码要求4-12位');
    }else if(!/^\w+$/.test(value)) {
      return Promise.reject('必须是英文字母、数字、下划线组成');
    }else {
      return Promise.resolve()
    }
  }

  return (
    <div className="login-wrap">
      <div className="header">
        <img src={logo} alt="logo" />
        <h2>商品管理系统</h2>
      </div>
      <div className="content">
        <h2 className="title">
          用户登录
        </h2>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              { required: true,message: '请输入用户名！',},
              { min: 4, message: "必须大于等于四位"},
              { pattern: /^\w+$/, message: "必须是英文字母、数字、下划线组成"},
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ validator: psdValidate }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item className="login-btn">
            <Button type="primary" htmlType="submit" className="login-form-button" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login