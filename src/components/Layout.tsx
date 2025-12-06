import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header id="header"></header>
      <main>{children}</main>
      <footer id="footer"></footer>
    </div>
  )
}

export default Layout