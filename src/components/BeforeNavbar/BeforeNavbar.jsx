import { styled } from "styled-components"

const BeforeNavbarDiv = styled.div`
  background-color: #f9f9f9;
  margin: 0 30px 0 30px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border: 1px solid #f9f9f9;
  border-radius: 0 0 10px 10px;
`

const BeforeNavbarSpan = styled.span`
    background-color: white;
    border: 0;
    border-radius: 5px;
    width: 50px;
    margin: 10px;
    
`

const BeforeNavbarH1 = styled.h1`
    font-size: 12px;
    padding: 0 0 0 30px;
    font-weight: 700;
    margin: 1px 0 0 -30px;
`

const BeforeNavbarA = styled.a`
    font-size: 12px;
    margin: 0 10px 0 0;
    align-self: center;
    text-decoration: none;
`

const BeforeNavbar = () => {
  return (
    <BeforeNavbarDiv className="BeforeNavbar">
        <div style={{ display: 'flex', justifyContent:'center', placeItems: 'center'}}>
          <BeforeNavbarSpan className="counter">500</BeforeNavbarSpan>
          <BeforeNavbarH1>Zerries - ZRIS</BeforeNavbarH1>
        </div>
        <BeforeNavbarA href="https://venom.network/" target="_blank" rel="noopener noreferrer">Explorer</BeforeNavbarA>
    </BeforeNavbarDiv>
  )
}

export default BeforeNavbar