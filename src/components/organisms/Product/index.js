import React, { useRef, useState } from 'react'
import CardProduct from '../../molecules/CardProduct'
import { Button, Col, Container, Row } from 'react-bootstrap';

const Product = () => {


    const scrollRef = useRef(null);
    const [startIndex, setStartIndex] = useState(0);
    
    const cardsPerPage = 4;
    const totalCards = 8;

    const scrollLeft = () => {
      
        if (startIndex > 0) {
            setStartIndex(startIndex - cardsPerPage);
        }
  if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 300;
        }
    };
 
    const scrollRight = () => {
       
        if (startIndex + cardsPerPage < totalCards) {
            setStartIndex(startIndex + cardsPerPage);
        }
        if (scrollRef.current) {
            scrollRef.current.scrollRight += 300;
        }
    }
    const cards = Array.from({ length: totalCards }, (_, index) => (
        // <Col key={index} xs={12} md={6} lg={3}>
            <CardProduct />
        // </Col>
    )).slice(startIndex, startIndex + cardsPerPage);
    return (
//         // <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))', gap: '1rem', padding: '1rem' }}>

//         <div>
//             <Row>
                
//                 <Col>
//                     <div style={{
//                         display: 'flex',
//                         overflowX: 'scroll',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         height: '300px',
//                         gap: '1rem',
//                         padding: '1rem',
//                         backgroundColor:'red'
//                     }}
//                     ref={scrollRef}
//                     >
//                         <button onClick={scrollLeft} disabled={startIndex === 0}>left</button>
//                     {cards}
//                 <button onClick={scrollRight} disabled={startIndex + cardsPerPage >= cardsPerPage.length}>right</button>
//             </div>
//                 </Col>
                

//             </Row>
            
        
//         </div>
//   )
// }

        <Container fluid>
            <Row>
                <Col xs={12}>
                   
               
                {/* <Col xs={8}> */}
                    <div
                        style={{
                            display: 'flex',
                            // height: '400px',
                        gap: '1rem',
                            padding: '1rem',
                            // overflowX: 'scroll',
                        justifyContent: 'center',
                        alignItems: 'center',
                            // height: '300px',
                        // backgroundColor:'red'
                             overflowX: 'auto',
                          
                        }}
                        ref={scrollRef}
                    >
                        <Button onClick={scrollLeft} disabled={startIndex === 0}>
                        Left
                    </Button>
                        {cards}
                        <Button
                        onClick={scrollRight}
                        // disabled={startIndex + cardsPerPage >= totalCards}
                            disabled={startIndex === totalCards - 1}
                    >
                        Right
                    </Button>
                    </div>
                {/* </Col>
                <Col xs={2} className="d-flex justify-content-end"> */}
                    
                </Col>
            
                
            </Row>
        </Container>
    );
};
export default Product