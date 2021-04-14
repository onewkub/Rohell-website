import './styles.less'
import { Button } from 'antd'
import {
  HomeOutlined,
  AuditOutlined,
  DownloadOutlined,
} from '@ant-design/icons'

function ActionList() {
  const handleOnClick = (to: string) => {
    window.location.assign(to)
  }
  return (
    <div className="action-panel">
      <Button
        icon={<HomeOutlined />}
        shape="circle"
        onClick={() => handleOnClick('#home')}
      ></Button>
      <Button
        icon={<AuditOutlined />}
        shape="circle"
        onClick={() => handleOnClick('#register')}
      ></Button>
      <Button
        icon={<DownloadOutlined />}
        shape="circle"
        onClick={() => handleOnClick('#download')}
      ></Button>
    </div>
  )
}

export default ActionList
