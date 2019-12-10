import React from 'react'


import Header from './header'
import BottomSection from "./bottom/bottom";

type Props = {authorImageFluid?:string, children?:React.ReactNode, pageTitle?:string, postAuthor?:string}
const Layout = ({authorImageFluid, children, pageTitle, postAuthor}:Props) => (
            <>

                <Header siteTitle="Gatsby The Robust"/>
                <div className="container" id="content">
                    <h1>{pageTitle} -ddd--</h1>
                    <div className="row">
                        <div className="col-md-12 col-lg-9">{children} </div>
                        <div className="col-md-12 col-lg-3">
                        </div>

                    </div>
                </div>
                <BottomSection/>
            </>
);



export default Layout
