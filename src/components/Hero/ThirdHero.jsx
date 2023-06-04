import { styled } from "styled-components"
import PropTypes from 'prop-types'
import airdrop from '../../assets/airdrop.jpg'
import stat from '../../assets/stat.jpg'
import done from '../../assets/done.jpg'


const ThirdHeroDiv = styled.div`
    margin: 25px 30px 0 30px;
    
    @media (max-width: 426px){
        margin: 25px 10px 0 10px;
    }
`
const BannerBackgroundDiv = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100px;
    color: white;
    background-image: linear-gradient(69deg, rgba(100, 255, 196, 0.616), rgba(0, 102, 255, 0.753), rgba(209, 58, 229, 0.715));
    border-radius: 10px;
    place-items: center;
`
const BannerDiv = styled.div`
    text-align: center;
`

const BannerH2 = styled.h2`
    font-size: 30px;

    @media (max-width: 426px){
        font-size: 20px
    }

    @media (max-width: 376px){
        font-size: 14px
    }
`

const BannerH4 = styled.h4`
    font-size: 20px;

    @media (max-width: 426px){
        font-size: 12px
    }
`

const BannerInformationDiv = styled.div`
    border-radius: 10px;
    padding: 20px 40px;
    margin: 30px 0 0;
    background-color: hsl(0, 0%, 98%);
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const InformationImage = styled.img`
    width: 50px;
    border-radius: 10px;
`

const BannerInformationH1 = styled.h1`
    font-size: 20px;
    font-weight: 600;
    text-align: center;

    @media (max-width: 426px){
        font-size: 16px
    }

    @media (max-width: 376px){
        font-size: 12px
    }
`

const BannerInformationInnerDiv = styled.div`
    display: flex;
    justify-content: space-around;
    place-items: center;
    margin: 60px 0 0 0;

    @media (max-width: 609px){
        display: grid;
        grid-template-column: repeat(2, 1fr)
    }
`

const InformationH2 = styled.h2`
    font-size: 20px;
    margin: 20px 0 0 0;
`

const InformationP = styled.p`
    font-size: 16px;
    color: grey;
`

const InnerBannerText = (props) => {
    return(
        <BannerDiv >
            <BannerH2>{props.TopText}</BannerH2>
            <BannerH4>{props.BottomText}</BannerH4>
        </BannerDiv>
    )
}

InnerBannerText.propTypes = {
    TopText: PropTypes.string.isRequired,
    BottomText: PropTypes.string.isRequired
}

const Banner =() => {
    return(
        <BannerBackgroundDiv>
            <InnerBannerText TopText="2920" BottomText="Airdrop Given" />
            <InnerBannerText TopText="Z 100000" BottomText="Airdrop won" />
            <InnerBannerText TopText="600" BottomText="Zerries  NFTs owned" />
        </BannerBackgroundDiv>
    )
}

const Information = (props) => {
    return(
        <div>
            <InformationImage src={props.Image}  srcSet="" alt="Logo " />
            <InformationH2>{props.TopText}</InformationH2>
            <InformationP>{props.BottomText}</InformationP>
        </div>
    )
}

Information.propTypes = {
    TopText: PropTypes.string.isRequired,
    BottomText: PropTypes.string.isRequired,
    Image: PropTypes.object.isRequired
}

const BannerInformation = () => {
    return(
        <BannerInformationDiv>
            <BannerInformationH1>Trust and Gamble in this community to provide the right solution on Venom</BannerInformationH1>
            <BannerInformationInnerDiv>
                <Information Image={airdrop} TopText="Fair airdrop" BottomText="Every one gets his or her Zerries share."/>
                <Information Image={stat} TopText="Rapid transactions" BottomText="Venom offers a super fast transaction speed."/>
                <Information Image={done} TopText="Be an Investor" BottomText="Being an investor ultimately pays all."/>
            </BannerInformationInnerDiv>
        </BannerInformationDiv>
    )
}


const ThirdHero = () => {
  return (
    <ThirdHeroDiv>
        <Banner />
        <BannerInformation />
    </ThirdHeroDiv>
  )
}

export default ThirdHero