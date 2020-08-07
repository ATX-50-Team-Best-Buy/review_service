import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import './styles/App.css';
import ReviewList from './components/ReviewList'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Accordion allowZeroExpanded={true} style={{width:"85%"}}>
          <AccordionItem className="reviewAccordion">
              <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className='reviews'>
                      Reviews
                    </div>
                    <img className="arrow" src="https://static.thenounproject.com/png/196766-200.png"></img>
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <ReviewList />
              </AccordionItemPanel>
          </AccordionItem>
      </Accordion>
  );
    // return (

    // <div className="App">
    //   <div>Hello Worl1d</div>
    // </div>
    // )
  }
}
export default App;
