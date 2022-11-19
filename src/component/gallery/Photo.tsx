import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { itemData } from './Photo.constants';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useParams } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Photo: React.FunctionComponent = () => {
    const { type } = useParams();

    const [tabValue, setTabValue] = React.useState(type !== undefined ? Number(type) : PhotoType.EightYear);
    const weddingPhotos: any = [];
    const eightYearsPhotos: any = [];

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    for (let i = 1 ; i <= 135; i++) {
        weddingPhotos.push({
            img: `${process.env.PUBLIC_URL}/assets/cuoi/cuoi (${i}).jpg`,
            title: `Xuan Quang - Hong Nhi`,
        })
    }
        
    for (let i = 1 ; i <= 41; i++) {
        eightYearsPhotos.push({
            img: `${process.env.PUBLIC_URL}/assets/8nam/8nam (${i}).jpg`,
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
        }, 100);
    }, [tabValue]);

    const renderImageList = (items: any[]) => {
        return (
            <ImageList variant="woven" cols={3} gap={8}>
                {items.map((item) => (
                    <ImageListItem key={item.img} >
                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        );
    }

    const renderEightYearJourneyImages = () => renderImageList(eightYearsPhotos);

    const renderWeddingImages = () => renderImageList(weddingPhotos);

    return (
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
    );
}

export default Photo;

export enum PhotoType {
    EightYear,
    Wedding,
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

