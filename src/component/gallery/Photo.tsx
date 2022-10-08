import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { items } from './Photo.constants';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useParams } from 'react-router-dom';

const Photo: React.FunctionComponent = () => {
    const { type } = useParams();

    const tabRef = {
        [PhotoType.EightYear]: React.createRef<HTMLAnchorElement>(),
        [PhotoType.Wedding]: React.createRef<HTMLAnchorElement>(),
    };

    const [tabValue, setTabValue] = React.useState(type !== undefined ? Number(type) : PhotoType.EightYear);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    React.useEffect(() => {
        tabRef[tabValue as PhotoType].current?.scrollIntoView({behavior: "smooth", block: "start"});
    }, [tabValue]);

    const renderImageList = (items: any[]) => {
        return (
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
        );
    }

    const renderEightYearJourneyImages = () => renderImageList(items.slice(0, items.length));

    const renderWeddingImages = () => renderImageList(items.slice(0, 3));

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
                <Tab ref={tabRef[PhotoType.EightYear]} href={`#${PhotoType.EightYear}`} value={PhotoType.EightYear} label="Hành Trình 8 Năm" />
                <Tab ref={tabRef[PhotoType.Wedding]} href={`#${PhotoType.Wedding}`}value={PhotoType.Wedding} label="Hình Cưới" />
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

