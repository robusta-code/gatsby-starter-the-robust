import React from 'react'
import './styles/layout.css'

import Header from './header'
import BottomSection from "./bottom/bottom";

type Props = { authorImageFluid?: string, children?: React.ReactNode, pageTitle?: string, postAuthor?: string }
const Layout = ({authorImageFluid, children, pageTitle, postAuthor}: Props) => (
    <>

        <Header siteTitle="Gatsby The Robust"/>
        <div className="container" id="content">
            <h1>{pageTitle}</h1>
            { postAuthor && <h3>by {postAuthor}</h3>}

            <div>{children} </div>

        </div>
        <BottomSection/>
    </>
);


export default Layout
