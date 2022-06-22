import React from "react";
 import moment from 'moment';
 import './App.css';
 
 export class Countdown extends React.Component {
     state = {
         days: undefined,
         hours: undefined,
         minutes: undefined,
         seconds: undefined
     };
     interval: any = undefined;
     componentDidMount() {
         this.interval = setInterval(() => {
             const then = moment("25122022180000", "DDMMYYYYhhmmss");
             const now = moment();
             const countdown = moment(then.valueOf() - now.valueOf());
             const days = countdown.format('DDD');
             const hours = countdown.format('HH');
             const minutes = countdown.format('mm');
             const seconds = countdown.format('ss');
             this.setState({ days, hours, minutes, seconds });
         }, 1000);
     }
     
     componentWillUnmount() {
         if (this.interval) {
             clearInterval(this.interval);
         }
     }
     
     render() {
         const { days, hours, minutes, seconds } = this.state;
         
         // Mapping the date values to radius values
         const daysRadius = mapNumber(days, 360, 0, 0, 360);
         const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
         const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
         const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);
         
         if (!seconds) {
             return null;
         }
         
         return (
             <div>
                 <div className="title-area">
                    <img className="img1" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/crown.png" alt=""/>
                    <h1 className="">Countdown</h1>
                    <h1>to our big day</h1>
                    <h2>Xuan Quang - Hong Nhi wedding</h2>
                 </div>
                 
                 <div className="countdown-wrapper">
                     {days && (
                         <div className="countdown-item">
                             <SVGCircle radius={daysRadius} />
                             {days}
                             <span>days</span>
                         </div>
                     )}
                     {hours && (
                         <div className="countdown-item">
                             <SVGCircle radius={hoursRadius} />
                             {hours}
                             <span>hours</span>
                         </div>
                     )}
                     {minutes && (
                         <div className="countdown-item">
                             <SVGCircle radius={minutesRadius} />
                             {minutes}
                             <span>minutes</span>
                         </div>
                     )}
                     {seconds && (
                         <div className="countdown-item">
                             <SVGCircle radius={secondsRadius} />
                             {seconds}
                             <span>seconds</span>
                         </div>
                     )}
                 </div>
                 <div className="post-area">
                    <img className="couple" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/couple.jpg" />
                 </div>
             </div>
         );
     }
 }
 
 const SVGCircle = (x: {radius: any}) => (
     <svg className="countdown-svg">
         <path
             fill="none"
             stroke="#333"
             strokeWidth="4"
             d={describeArc(50, 50, 48, 0, x.radius)}
         />
     </svg>
 );
 
 // From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
 
 function polarToCartesian(centerX: any, centerY: any, radius: any, angleInDegrees: any) {
     var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
     
     return {
         x: centerX + radius * Math.cos(angleInRadians),
         y: centerY + radius * Math.sin(angleInRadians)
     };
 }
 
 function describeArc(x: any, y: any, radius: any, startAngle: any, endAngle: any) {
     var start = polarToCartesian(x, y, radius, endAngle);
     var end = polarToCartesian(x, y, radius, startAngle);
     var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
     var d = [
         'M',
         start.x,
         start.y,
         'A',
         radius,
         radius,
         0,
         largeArcFlag,
         0,
         end.x,
         end.y
     ].join(' ');
     
     return d;
 }
 
 
 function mapNumber(number: any, in_min: any, in_max: any, out_min: any, out_max: any) {
     return (
         ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
     );
 }
