import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { eightYearsPhotosSmall } from './Photo.constants';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useParams } from 'react-router-dom';
import { scroller } from 'react-scroll';
import ModalImage from '../modalImg/modalImg';

const Photo: React.FunctionComponent = () => {
    const { type } = useParams();
    const [imgUrl, setimgUrl] = useState('');
	const [titleImg, setTitleImg] = useState('');
	const [showFancy, setShowFancy] = useState(false);
    const [tabValue, setTabValue] = React.useState(type !== undefined ? Number(type) : PhotoType.EightYear);
    const weddingPhotos: any = [];
    const eightYearsPhotos: any = [];
    const { innerWidth: width } = window;
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const setImg = (e: any) => {
        let url:string = e.target.currentSrc;
		if (url.indexOf('8nam_showmore_ava') != -1) {
			url = url.replace('8nam_showmore_ava', '8nam_showmore');
		}
        if (url.indexOf('cuoi_ava') != -1) {
			url = url.replace('cuoi_ava', 'cuoi');
		}
		setimgUrl(e.target.currentSrc);
		setTitleImg(e.target.alt);
		setShowFancy(true);
	}

    for (let i = 1 ; i <= 135; i++) {
        weddingPhotos.push({
            img: `https://nqwedding.s3.ap-southeast-1.amazonaws.com/cuoi_ava/cuoi${i}.jpg`,
            title: `Xuan Quang - Hong Nhi`,
        })
    }
        
    for (let i = 1 ; i <= 41; i++) {
        eightYearsPhotos.push({
            img: `https://nqwedding.s3.ap-southeast-1.amazonaws.com/8nam_showmore_ava/8nam${i}.jpg`,
            title: `Xuan Quang - Hong Nhi`,
        })
    }
    
    React.useEffect(() => {
        let id = "EightYear";
        if (tabValue === PhotoType.Wedding) {
            id = "Wedding";
        }       
        setTimeout(() => {
            scroller.scrollTo(
                id,  
                {
                    smooth: true,
                    block: "start",
                }
            )
        }, 1000);
    }, [tabValue]);

    const renderImageList = (items: any[]) => {
        return (
            <ImageList variant="masonry" cols={width < 600 ? 3 : 6} gap={8}>
                {items.map((item) => (
                    <ImageListItem key={item.img} >
                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            onClick={setImg}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        );
    }

    const renderEightYearJourneyImages = () => renderImageList(eightYearsPhotos);

    const renderWeddingImages = () => renderImageList(weddingPhotos);

    return (
        <>
        {showFancy && <ModalImage type='image' urlImg={imgUrl} setShowModal={setShowFancy} title={titleImg} />}
        <Box sx={{
            margin: "10% 5%",
        }}>
            <Tabs
                value={tabValue}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                centered
            >
                <Tab id={"EightYear"} href={`#${PhotoType.EightYear}`} value={PhotoType.EightYear} label="Hành Trình 8 Năm" />
                <Tab id={"Wedding"} href={`#${PhotoType.Wedding}`} value={PhotoType.Wedding} label="Hình Cưới" />
            </Tabs>
            <TabPanel value={tabValue} index={0}>
                {renderEightYearJourneyImages()}
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                {renderWeddingImages()}
            </TabPanel>
        </Box>
        </>
    );
}

export default Photo;

export enum PhotoType {
    EightYear,
    Wedding,
    WeddingTP,
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

