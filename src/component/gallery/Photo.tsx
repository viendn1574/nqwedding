import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { items } from './Photo.constants';

const Photo: React.FunctionComponent = () => {
    return (
        <Box sx={{
            margin: "10% 5%"
        }}> 
            <ImageList variant="masonry" cols={3} gap={8}>
                {items.map((item) => (
                    <ImageListItem key={item.itemId} >
                        <img
                            src={`${item.mediaUrl}?fit=crop&auto=format`}
                            alt={item.metaData.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

export default Photo;
