import React from 'react';
import Container from "react-bootstrap/Container";

const Home = () => (
    <Container>

        <div className="row">

            <div className="col-md-12">
                <h2>Overview</h2>
                    A broad, comprehensive view; a survey.
                    <h5>Description</h5>
                <dl>
                    <dd style={{ fontSize: '90%' }}>
                        The act of delineating or depicting; representation by visible lines, marks, colors, etc.
                    </dd>
                    
                    </dl>
                <h5>Definitions</h5>
                <ul>
                    <li>
                        <strong>Definition</strong> - The act or process of stating a precise meaning or significance; formulation of a meaning.
					</li>
                </ul>
            </div>
        </div>
    </Container>
);

export default Home;
