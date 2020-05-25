import * as React from 'react'
// import Link from 'next/link'
import Head from 'next/head'
import MainHeader from "./MainHeader"
type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Clee's Blog",
}) => (
  <div className="layout-wrapper">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <MainHeader/>
    </header>
    {children}
    <footer>
      <div className="footer">&copy;2020-2020 ICP证: <a href="www.beian.miit.gov.cn">粤ICP备20034442号</a></div>
    </footer>
  </div>
)

export default Layout
