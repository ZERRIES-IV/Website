import { styled } from "styled-components"

const HeroDiv = styled.div`
    overflow-x: hidden;
    width: 98vw;
`

const HeroVid = styled.div`
    background-image: linear-gradient(300deg, rgba(100, 255, 196, 0.616), rgba(0, 102, 255, 0.753), rgba(209, 58, 229, 0.715));
    border-radius: 10px;
    margin: 0 30px;
    width: 94vw;
    height: 500px;
    position: relative;
    z-index: 0;
    
    @media (max-width: 769px){
        height: 340px;
        width: 92vw;
    }

    @media (max-width: 426px){
        margin: 0 10px;
        width: 94vw;
    }
`

export const HeroInnerDiv = styled.div`
    position: absolute;
    z-index: 1;
    margin: 70px 60px 0 60px;

    @media (max-width: 769px){
        margin: 40px 50px 0 50px;
    }

    @media (max-width: 426px){
        margin: 20px 30px 0 30px;
    }
`

export const HeroH2 = styled.h2`
    font-size: 60px;
    color: white;

    @media (max-width: 1024px){
        font-size: 50px;
    }

    @media (max-width: 769px){
        font-size: 30px;
    }

    @media (max-width: 376px){
        font-size: 25px;
    }
`

const HeroH3 = styled.h3`
    font-size: 30px;
    color: white;
    padding: 30px 0 0 0;

    @media (max-width: 769px){
        font-size: 18px;
    }

    @media (max-width: 376px){
        font-size: 16px;
    }
`

export const HeroButtonDiv = styled.div`
    margin: 30px 0 0 0;
    display: flex;
    gap: 20px;    
`

export const HeroButton = styled.button`
    font-size: 15px;
    color: white;
    padding: 10px 25px;
    border: 2px solid white;
    background-color: transparent;
    border-radius: 10px;

    @media (max-width: 769px){
        font-size: 12px;
        padding: 8px 20px;
    }

    @media (max-width: 426px){
        font-size: 10px;
        padding: 5px 10px;
    }
    
`

const Hero = () => {
  return (
    <HeroDiv>
        <HeroInnerDiv>
            <HeroH2>
                Gamble your hard<br /> earned crypto against<br /> your homies
            </HeroH2>
            <HeroH3>
            Multi-player blockchain dice game. Bet against your friends<br /> and win ZENI & NFTs.
            </HeroH3>
            <HeroButtonDiv>
                <HeroButton>Add To Liquidity</HeroButton>
                <HeroButton>NFT Rewards</HeroButton>
            </HeroButtonDiv>
        </HeroInnerDiv>
        <HeroVid />
    </HeroDiv>
  )
}

export default Hero