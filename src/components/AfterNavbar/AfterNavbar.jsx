import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import './AfterNavbar.scss'
import Logo from '../../assets/react.svg'
import PropTypes from 'prop-types'
import { useEffect } from "react"
import { styled } from "styled-components"

const Button = styled.button`
    background-image: linear-gradient(69deg, rgba(100, 255, 196, 0.616), rgba(0, 102, 255, 0.753), rgba(209, 58, 229, 0.715));
    border: 0;
    border-radius: 10px;
    font-weight: 600;
    padding: 5px 10px;
    color: white;
`

export const RainbowButton = (props) => {
    return (
        <Button>{props.innerText}</Button>
    )
}

RainbowButton.propTypes = {
    innerText: PropTypes.string
}

const Navigation = () => {

    useEffect(() => {
        const navBar = document.getElementById('navbar');
        const offsetTop = navBar.offsetTop;
    
        const handleScroll = () => {
          if (window.pageYOffset >= offsetTop) {
            navBar.classList.add('sticky');
          } else {
            navBar.classList.remove('sticky');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // Empty dependency array ensures the effect runs only once on component mount
    
    return(
        <Navbar expand="md" id="navbar">
            <Container fluid>
                <Navbar.Brand href='#home'>
                    <img alt='LOGO' src={Logo} width={50} height={50} />{' '} Zerries
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
                <Navbar.Offcanvas id="offcanvasNavbar-expand-md" aria-labelledby="offcanvasNavbarLabel-expand-md" placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                        <img alt='LOGO' src={Logo} width={50} height={50} />{' '} Zerries
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="justify-content-between">
                    <Nav className="ml-auto">
                        <Nav.Link>Play</Nav.Link>
                        <Nav.Link>Airdrop</Nav.Link>
                        <Nav.Link>NFTs</Nav.Link>
                        <Nav.Link>Locker</Nav.Link>
                        <Nav.Link>Project</Nav.Link>
                    </Nav>
                    <RainbowButton innerText="Connect Wallet" />
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

const AfterNavbar = () => {
  return (
    <header className="AfterNavbar">
        <Navigation />
    </header>
  )
}

export default AfterNavbar