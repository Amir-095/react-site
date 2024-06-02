import React, { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Cars.css';

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const xmlFilePath = '/cars.xml'; 
    fetch(xmlFilePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        return response.text();
      })
      .then(str => {
        const xml = new XMLParser().parseFromString(str);
        const items = xml.getElementsByTagName('item');
        const carsData = items.map(item => ({
          title: item.children.find(child => child.name === 'title')?.value || '',
          description: item.children.find(child => child.name === 'description')?.value || '',
          image: item.children.find(child => child.name === 'image')?.value || ''
        }));
        setCars(carsData);
      })
      .catch(error => console.error('Ошибка при загрузке XML:', error));
  }, []);

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        {cars.map((car, index) => (
          <Col key={index} md={6} className="mb-4">
            <Card>
              {car.image && <Card.Img variant="top" src={car.image} alt={car.title} />}
              <Card.Body>
                {car.title && <Card.Title>{car.title}</Card.Title>}
                {car.description && <Card.Text>{car.description}</Card.Text>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cars;
