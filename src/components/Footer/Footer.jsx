import { styled } from "styled-components"

const FooterDiv = styled.div`
    background-color: #f9f9f9;
    margin: 40px 30px 0 30px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    border: 1px solid #f9f9f9;
    border-radius: 20px 20px 0 0;
    padding: 20px 0;
    gap: 10px;

    @media (max-width: 429px){
        flex-direction: column;
        margin: 40px 10px 0 10px;
    }
`

const FooterH4 = styled.h4`
    font-weight: 900;
    font-size: 24px;

    @media (max-width: 429px){
        font-size: 18px;
    }

    @media (max-width: 376px){
        font-size: 14px;
    }
`

const SocialsDiv = styled.div`
    display: flex;
    justify-content: center;
`

const TelegramIcon = 'https://img.icons8.com/ios-filled/949494/20/telegram-app.png'
const TwitterIcon = 'https://img.icons8.com/ios-filled/949494/20/null/twitter.png'

const SOCIALS = [
    {
        name: 'telegram-chat',
        src: `${TelegramIcon}`,
        hrf: 'https://t.me/musheehub'
    },    
    {
        name: 'twitter',
        src: `${TwitterIcon}`,
        hrf: 'https://twitter.com/musheehub'
    },
    {
        name: 'telegram-channel',
        src: `${TelegramIcon}`,
        hrf: 'https://t.me/musheehall'
    },
]

function Socials(){
    return (
        <SocialsDiv >
        {
        SOCIALS.map((social) => {
            return (
                <div className={social.name} key={social.name} style={{ padding: '0 20px'}}>
                    <a href={social.hrf} target='_blank' rel='noreferrer'>
                    <img srcSet='' alt={social.name} src={social.src}/>  
                    </a>                                
                </div>
            )
        })
        }
        </SocialsDiv>
    )
}

const Footer = () => {
  return (
    <FooterDiv>
    <Socials />
    <FooterH4>© 2022 Zerries. All rights reserved</FooterH4>
    </FooterDiv>
  )
}

export default Footer