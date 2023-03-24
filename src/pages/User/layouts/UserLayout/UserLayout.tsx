import { Outlet } from 'react-router'
import UserSideNav from 'src/pages/User/components/UserSideNav'

const UserLayout = () => {
  return (
    <div>
      <UserSideNav />
      <Outlet />
    </div>
  )
}

export default UserLayout