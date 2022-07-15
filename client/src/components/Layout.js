import React from 'react'
import '../assets/default-layout.css'
function Layout(props) {
  return (
    <div className="layout">

        <div className="header d-flex justify-content-between align-items-center">

            <div>
                <h1 className="logo">Job Tracker</h1>
            </div>
            
            <div className="username">
                <h1>username</h1>
            </div>
            

        </div>
        
        <div className="content">
            {
                props.children
            }
        </div>
    </div>
  )
}

export default Layout