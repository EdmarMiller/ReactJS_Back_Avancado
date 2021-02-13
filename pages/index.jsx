import Head from 'next/head'
import { Container, Row, Card, Button, Nav, Form, FormControl } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>ReactJS Com bootstrap e CSS NextJS</title>
        
      </Head>
      <Container>
        <Navbar bg="danger" fixed="top" variant="dark">
          <Navbar.Brand href="#home">Deu Certo</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Sobre</Nav.Link>
            <Nav.Link href="#pricing">Produtos</Nav.Link>
          </Nav>
         
        </Navbar>
        <Container>
          
          <Row className="justify-content-md-between my-5">
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Github</Card.Title>
                <Card.Text>
                  Link para o Github
                </Card.Text>
                <Button
                  variant="danger"
                  href="https://github.com/EdmarMiller"
                >
                  Vamoooooo &rarr;
                </Button>
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Linkedin</Card.Title>
                <Card.Text>
                  Visite meu likedin
                </Card.Text>
                <Button
                  variant="danger"
                  href="https://www.linkedin.com/in/edmar-miller"
                >
                  Vamoooooo &rarr;
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Container>

     
    </Container>
  )
}
