import { Button, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
const { Title } = Typography
function DownloadPage() {
  return (
    <div className="download-content" id="download">
      <h1 className="neonTitle" style={{ fontSize: 46 }}>
        Download
      </h1>
      <div className="download-box">
        <Title level={3}>No file</Title>
        <DownloadOutlined style={{ fontSize: 128 }} />
        <Button href="#" size="large" type="primary">
          Download
        </Button>
      </div>
    </div>
  )
}

export default DownloadPage
