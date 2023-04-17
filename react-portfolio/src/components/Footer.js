import React from 'react';
import Container from "react-bootstrap/Container";
import './Footer.css';


const Footer = props => {
    
    return (

        <React.Fragment>
            
            <div>
                <Container>
                    <div className="row">
                    <div className="col-md-2"></div>
                        <div className="col-md-8" style={{ textAlign: 'center' }}>
                            <em style={{ color: 'grey', fontSize: '70%' }}>©2023 My Portfolio</em><br />
                            <em style={{ fontSize: '70%' }}>Thanks for stopping by!</em>

                            <div className="col-md-2">
                                <br />
                            </div>

                        </div>


                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
    
};
export default Footer;



