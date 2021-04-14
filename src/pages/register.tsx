import { Form, Input, Button } from 'antd'
import { useEffect, useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

function RegisterPage() {
  const [verify, setVerify] = useState<boolean>(false)
  // eslint-disable-next-line
  const [token, setToken] = useState<string>('')
  const recaptcha = useGoogleReCaptcha()
  useEffect(() => {
    async function getVerify() {
      if (recaptcha.executeRecaptcha) {
        const token = await recaptcha.executeRecaptcha('register_page')
        // console.log(token)
        setVerify(true)
        setToken(token)
      }
    }
    getVerify()
    // console.log('get Verify')
  }, [recaptcha])

  return (
    <div className="register-content" id="register">
      <h1 className="neonTitle" style={{ fontSize: 46 }}>
        Register
      </h1>
      <Form layout="vertical" className="register-form">
        <Form.Item
          name="id"
          label="ID"
          rules={[
            {
              required: true,
              message: 'Please input your ID',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
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
          <Input.Password />
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
          <Input />
        </Form.Item>
        <Button
          disabled={!verify}
          size="large"
          type="primary"
          style={{ marginTop: 16 }}
        >
          Register
        </Button>
      </Form>
    </div>
  )
}

export default RegisterPage
