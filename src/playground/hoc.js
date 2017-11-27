
// Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state


import React from 'react'
import ReacDOM from 'react-dom'


const Info = ({info}) => (
  <div>
    <h1>Info</h1>
    <p>The info is: { info }</p>
  </div>
) 

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {
        props.isAdmin &&
        <p>This is private info. Please do not share.</p>
      }
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {
        props.isAuthenticated
        ? <WrappedComponent {...props} />
        : <h3>Please log in to continue</h3>
      }
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReacDOM.render(
  <AuthInfo isAuthenticated={false} info='These is the details' />,
  document.getElementById('app')
)