import React from 'react';
import { WeddingFooter } from './footer';
import { WeddingHeader } from './header';

const Layout: React.FunctionComponent<any> = (props) => {
    return (
        <>
            <div className='d-flex flex-column'>
                <WeddingHeader />
                {props.children}
                <WeddingFooter />
            </div>
        </>
    )
}

export default Layout;
