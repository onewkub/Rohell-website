import './styles.less'
import { Button, Tooltip } from 'antd'
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
      <Tooltip placement="left" title="Home">
        <Button
          icon={<HomeOutlined />}
          shape="circle"
          onClick={() => handleOnClick('#home')}
        ></Button>
      </Tooltip>
      <Tooltip placement="left" title="Register">
        <Button
          icon={<AuditOutlined />}
          shape="circle"
          onClick={() => handleOnClick('#register')}
        ></Button>
      </Tooltip>
      <Tooltip placement="left" title="Download">
        <Button
          icon={<DownloadOutlined />}
          shape="circle"
          onClick={() => handleOnClick('#download')}
        ></Button>
      </Tooltip>
    </div>
  )
}

export default ActionList
