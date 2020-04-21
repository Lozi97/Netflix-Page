import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import './ContentRow.css'; 

import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import five from '../assets/five.jpg'
import six from '../assets/six.jpg'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const content = [one, two, three, four, five, six]

export default class ContentRow extends React.Component {

  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

  }


  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
  

    return (
      <div style={{paddingLeft:"0px",overflowX:"hidden", width:"100%",bottom:"20px",position:"absolute",maxWidth:"100%",overflow:"hidden"}}>
  <ItemsCarousel
    placeholderItem={<div style={{ height: 200, background: '#EEE',overflow:"hidden"}} />}
    enablePlaceholder={true}
    numberOfPlaceholderItems={3}
    numberOfCards={5}
    gutter={12}
    slidesToScroll={2}
    chevronWidth={40}
    outsideChevron={false}
    showSlither={true}
    firstAndLastGutter={true}
    activeItemIndex={this.state.activeItemIndex}
    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
    
    rightChevron={ <FontAwesomeIcon icon={faChevronRight} style={{color:"black" }} />   }
    leftChevron={<FontAwesomeIcon icon={faChevronLeft} style={{color:"black" }} />  }
  >
     {content.map(img => (
       <div className="item" >
               <img src={img} style={{width:"100%",overflow:"hidden"}} />
        </div>
          ))}
  </ItemsCarousel>
</div>
    );  
  }
} 