import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
         <header>
            Phần đầu
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
            Phần cuối
        </footer>
    </div>
  )
}

export default WebsiteLayout;