import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Contact'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header /> 
      {children}
      <Footer />
    </>
  )
}
