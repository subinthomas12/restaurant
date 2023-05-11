import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Restaurant.css'
import { Link } from 'react-router-dom';


function Restaurant() {

    const [restList, setRest] = useState([])

    // api to access data 
    const getData = async () => {
        const result = await fetch('/restaurants.json')
        result.json().then(data => setRest(data.restaurants))
    }

    console.log(restList);

    useEffect(() => {
        getData()
    }, [])

    return (

        <Row className='ms-5'>

            {
                restList.map(rest => (
                    <Col id='c1' className='p-2' lg={4} md={6}>

                        <Link id='l1' to={`/ViewRest/${rest.id}`}>

                            <Card className='mt-5 ms-5' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={rest.photograph} />
                                <Card.Body>
                                    <Card.Title>{rest.name}</Card.Title>
                                    <Card.Text style={{color:'black'}}>
                                        {rest.address}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Link>

                    </Col>
                ))
            }
        </Row>

    )
}

export default Restaurant