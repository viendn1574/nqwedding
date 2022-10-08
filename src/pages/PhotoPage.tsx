import React from 'react';
import Photo from '../component/gallery/Photo';
import Layout from '../Layout';

const PhotoPage: React.FunctionComponent = () => {
    return (
        <>
            <Layout>
                <Photo />
            </Layout>
        </>
    )
}

export default PhotoPage;
