import {HeroButton, HeroInnerDiv, HeroButtonDiv} from './Hero'
import HeroGif from '../../assets/3dLogo.png'
import { styled } from 'styled-components'
import { RainbowButton } from '../AfterNavbar/AfterNavbar'

const SecondHeroDiv =styled.div`
    overflow: hidden;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 30px 0 30px;

    @media (max-width: 769px){
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 600px){
        margin: 25px 10px 0 10px;
    }
`

const HalfDiv = styled.div`
    width: 100%;
    border: 2px solid gray;
    border-radius: 10px;
    display: flex;
    text-align: left;
    max-height: 500px;

    @media (max-width: 426px){
        height: 300px;
    }

    @media (max-width: 321px){
        width: 98%;
    }

`

const HalfDivH2 = styled.h2`
    font-size: 60px;
    color: black;

    @media (max-width: 1024px){
        font-size: 50px;
    }

    @media (max-width: 769px){
        font-size: 80px;
    }

    @media (max-width: 500px){
        font-size: 50px;
    }

    @media (max-width: 376px){
        font-size: 35px;
    }
`

const HalfDivColumn = styled.div`
    width: 100%;
    background-color: hsl(0, 0%, 90%);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px 10px 0 10px;
    max-height: 500px;

    @media (max-width: 426px){
        height: 300px;
    }

    @media (max-width: 321px){
        width: 98%;
    }

`

const SecondHeroImg = styled.img`
    border-radius: 10px;
    position: relative;
    z-index: 0;
    width: 100%;

    
`

const BasicDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px;

    @media (max-width: 426px){
        padding-bottom: 5px;
    }

`
const BasicInformationH3 = styled.h3`
    font-size: 25px;
    color: white;

    @media (max-width: 426px){
        font-size: 20px;
    }

    @media (max-width: 376px){
        font-size: 16px;
    }

    @media (max-width: 321px){
        font-size: 14px;
    }
`

const BasicInformationDiv = styled.div`
    border: 1px solid white;
    border-radius: 10px;
    margin: 20px 0 0 0;
`

const BasicDivH4 = styled.h4`
    font-weight: 700;
    font-size: 18px;
    color: white;

    @media (max-width: 426px){
        font-size: 16px;
    }

    @media (max-width: 376px){
        font-size: 14px;
    }

    @media (max-width: 321px){
        font-size: 10px;
    }

`

const BasicDivA = styled.a`
    text-decoration: none;
    color: black;
    background-color: white;
    display: flex;
    justify-content: center;
    border-radius: 0 0 10px 10px;

    @media (max-width: 426px){
        font-size: 16px;
    }

     @media (max-width: 376px){
        font-size: 12px;
    }
`

const JoinAd = () => {
    return(
        <HalfDiv>
            <HeroInnerDiv>
                <HalfDivH2>Want to get <br/> loads of Zerries</HalfDivH2>
                <HeroButtonDiv>
                    <HeroButton>Join</HeroButton>
                </HeroButtonDiv>
            </HeroInnerDiv>
            <SecondHeroImg src={HeroGif} alt="GIF" srcSet="" autoPlay/>
        </HalfDiv>
    )
}

const Information = () => {
    return(
        <BasicInformationDiv >
                <BasicDiv>
                    <BasicDivH4>Got Z 10.6</BasicDivH4>
                    <BasicDivH4>
                        4 hours ago
                    </BasicDivH4>
                </BasicDiv>
                <BasicDivA href="http://" target="_blank" rel="noopener noreferrer"> addressaddressaddressaddressaddressaddress </BasicDivA>
        </BasicInformationDiv>
    )
}

const BasicInformation = () => {
    return(
        <HalfDivColumn>
            <BasicDiv>
                <BasicInformationH3>Recent Winners</BasicInformationH3>
                <RainbowButton innerText="Join" />
            </BasicDiv>
            <Information />
            <Information />
            <Information />
            <Information />
            <Information />
            <Information />
            <Information />
            <Information />
        </HalfDivColumn>
    )
}

const SecondHero = () => {
  return (
    <SecondHeroDiv>
        <JoinAd />
        <BasicInformation />
    </SecondHeroDiv>
  )
}

export default SecondHero

