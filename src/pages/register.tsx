import { Form, Input, Button, Select, DatePicker, Result } from 'antd'
// import ragnarokHttprequest from 'lib/ragnnarok_api'
import { useState } from 'react'
import { RingLoader } from 'react-spinners'
// import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const { Option } = Select

function RegisterPage() {
  // const [verify, setVerify] = useState<boolean>(false)
  // eslint-disable-next-line
  // const [token, setToken] = useState<string>('')
  const [alreadyUse, setAlreadyUse] = useState<boolean>(false)
  const [sucess, setSucess] = useState<boolean>(false)
  const [form] = Form.useForm()
  // const recaptcha = useGoogleReCaptcha()
  const [loading, setLoading] = useState<boolean>(false)
  // useEffect(() => {
  //   setLoading(true)
  //   async function getVerify() {
  //     if (recaptcha.executeRecaptcha) {
  //       const token = await recaptcha.executeRecaptcha('register_page')
  //       // console.log(token)
  //       setVerify(true)
  //       setLoading(false)
  //       setToken(token)
  //     }
  //   }
  //   getVerify()
  //   // console.log('get Verify')
  // }, [recaptcha])
  const handleOnFinish = async (values: any) => {
    // console.log(values)
    setLoading(true)
    // const res = await ragnarokHttprequest.post('/register', values)
    await new Promise((resolve) => setTimeout(resolve, 5000))
    // console.log(res.status)
    // if (res.status === 200) {
    //   form.resetFields()
    //   setSucess(true)
    //   setAlreadyUse(false)
    // } else if (res.status === 409) {
    //   console.log('your id is already used')
    //   setAlreadyUse(true)
    //   form.validateFields()
    // }
    form.resetFields()
    setSucess(true)
    setAlreadyUse(false)
    console.log(values)
    setLoading(false)
  }
  if (loading) {
    return (
      <div className="register-content" id="register">
        <h1 className="neonTitle" style={{ fontSize: 46 }}>
          Register
        </h1>
        <div
          className="register-form"
          style={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <RingLoader size={80} color="#228dff" />
        </div>
      </div>
    )
  }
  if (sucess) {
    return (
      <div className="register-content" id="register">
        <h1 className="neonTitle" style={{ fontSize: 46 }}>
          Register
        </h1>
        <div className="register-form">
          <Result
            status="success"
            title="Successfully for registation!"
            subTitle="Welcome to ROHELL !!"
            extra={[
              <Button
                onClick={() => window.location.assign('#download')}
                type="primary"
                key="download"
              >
                Download
              </Button>,
              <Button onClick={() => setSucess(false)} key="back">
                Back to register
              </Button>,
            ]}
          />
        </div>
      </div>
    )
  }
  return (
    <div className="register-content" id="register">
      <h1 className="neonTitle" style={{ fontSize: 46 }}>
        Register
      </h1>
      <Form
        form={form}
        layout="vertical"
        className="register-form"
        onFinish={handleOnFinish}
      >
        <Form.Item
          name="id"
          label="ID"
          rules={[
            {
              required: true,
              message: 'Please input your ID',
            },
            () => ({
              validator: () => {
                if (alreadyUse) {
                  return Promise.reject(
                    new Error('Your username has already used.')
                  )
                }
                return Promise.resolve()
              },
            }),
          ]}
        >
          <Input
            onChange={() => {
              setAlreadyUse(false)
            }}
            placeholder="Please input your ID"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              pattern: /^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$/,
              message:
                'Minimum eight characters, at least one letter and one number',
            },
          ]}
        >
          <Input.Password placeholder="Please input your password" />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match!')
                )
              },
            }),
          ]}
        >
          <Input.Password placeholder="Please input your confirm password" />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder="Please input your email" />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please input your birth date',
            },
          ]}
          label="Birth Date"
          name="birthDate"
        >
          <DatePicker style={{ width: '100%' }} placeholder="1998-01-01" />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Please Select Gender',
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="M">Male</Option>
            <Option value="F">Female</Option>
          </Select>
        </Form.Item>
        <Button
          block
          // disabled={!verify}
          size="large"
          type="primary"
          style={{ marginTop: 16 }}
          htmlType="submit"
        >
          Register
        </Button>
      </Form>
    </div>
  )
}

export default RegisterPage
