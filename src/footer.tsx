import React from 'react';
import './footer.css';

export class WeddingFooter extends React.Component {
    
    render(): React.ReactNode {
        return (
            <footer className="footer">
                <div className="footer__content"><span className="footer__name jeremy text--colored">Xuân Quang</span>
                    <div className="footer__image"><img src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/footer_photo.jpg" alt=""/></div>
                    <span className="footer__name diana text--colored">Hồng Nhi</span>
                </div>
            </footer>
        )
    }
}