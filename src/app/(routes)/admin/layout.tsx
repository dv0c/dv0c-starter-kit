import { FC } from 'react'

interface layoutProps {
    children: React.ReactNode
}

const AdminLayout: FC<layoutProps> = ({children}) => {
  return <div>
    {children}
  </div>
}

export default AdminLayout