import { Button, Modal, Checkbox, Form, Input, Radio, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

interface dataType {
  show: Boolean
  close: Function
}

const UserInfoModal: React.FC<dataType> = (prop: dataType) => {
  // const [open, setOpen] = useState(false)
  const [form] = Form.useForm()
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [nickName, setNickName] = useState<string>('')
  const [gender, setGender] = useState<string>('0')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const open = prop.show ? true : false

  const handleOk = () => {
    setConfirmLoading(true)
    console.log(`nikename:${nickName},gender:${gender},phone:${phone},email:${email}`)

    setTimeout(() => {
      prop.close()
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    prop.close()
  }
  const modalClose = () => {
    form.resetFields()
    setGender('0')
    setPhone('')
    setEmail('')
  }

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button> */}
      <Modal title="修改信息" open={open} cancelText="取消" okText="提交" onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel} afterClose={modalClose} maskClosable={false}>
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} form={form} layout="horizontal">
          <Form.Item label="头像" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item label="昵称" name="nickName" rules={[{ required: true, message: '请输入昵称!' }]}>
            <Input
              value={nickName}
              onChange={(e) => {
                setNickName(e.target.value)
              }}
            />
          </Form.Item>
          <Form.Item label="性别">
            <Radio.Group onChange={(e) => setGender(e.target.value)} value={gender}>
              <Radio value="0"> 男 </Radio>
              <Radio value="1"> 女 </Radio>
              <Radio value="2"> 其他 </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="电话">
            <Input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value.replace(/[^\d]/g, ''))
              }}
            />
          </Form.Item>
          <Form.Item label="邮箱">
            <Input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default UserInfoModal
