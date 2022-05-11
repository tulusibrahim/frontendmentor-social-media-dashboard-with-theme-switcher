import { useColorModeValue } from '@chakra-ui/react'
import fb from './images/icon-facebook.svg'
import twt from './images/icon-twitter.svg'
import yt from './images/icon-youtube.svg'
import ig from './images/icon-instagram.svg'

export const CentralTheme = () => {
    let bgColor = useColorModeValue(LightWhiteBg, DarkVeryDarkBlue)
    let elementColor = useColorModeValue(LightLightGrayishBlue, DarkDarkDesaturatedBlue)
    let elementTopColor = useColorModeValue(LightVeryPaleBlue, DarkVeryDarkBlueTopBg)
    let textColor1 = useColorModeValue(LightVeryDarkBlueLightText, DarkWhiteText)
    let textColor2 = useColorModeValue(LightDarkGrayishBlue, DarkDesaturatedBlue)
    return {
        elementColor, bgColor, elementTopColor, textColor1, textColor2
    }
}

export const LimeGreen = 'hsl(163, 72%, 41%)'
export const BrightRed = 'hsl(356, 69%, 56%)'
export const Facebook = 'hsl(208, 92%, 53%)'
export const Twitter = 'hsl(203, 89%, 53%)'
export const YouTube = 'hsl(348, 97%, 39%)'

//dark
export const DarkVeryDarkBlue = 'hsl(230, 17%, 14%)' //BG
export const DarkVeryDarkBlueTopBg = 'hsl(232, 19%, 15%)' //Top BG Pattern
export const DarkDarkDesaturatedBlue = 'hsl(228, 28%, 20%)' //Card BG
export const DarkDesaturatedBlue = 'hsl(228, 34%, 66%)' //text
export const DarkWhiteText = 'hsl(0, 0%, 100%)' //text

//light
export const LightWhiteBg = 'hsl(0, 0%, 100%)' //(BG)
export const LightVeryPaleBlue = 'hsl(225, 100%, 98%)' //(Top BG Pattern)
export const LightLightGrayishBlue = 'hsl(227, 47%, 96%)' //(Card BG)
export const LightDarkGrayishBlue = 'hsl(228, 12%, 44%)' //(Text)
export const LightVeryDarkBlueLightText = 'hsl(230, 17%, 14%)' //(Text)

export const fontFamily = 'Inter'

export const fbColor = 'hsl(208, 92%, 53%)'
export const twtColor = 'hsl(203, 89%, 53%)'
export const igColor = '#E87100'
export const ytColor = 'hsl(348, 97%, 39%)'

export const user = [
    {
        username: '@nathanf',
        followers: 1987,
        FollowersToday: 12,
        socialMedia: fb
    }
    ,
    {
        username: '@nathanf',
        followers: 1044,
        FollowersToday: 99,
        socialMedia: twt
    }
    ,
    {
        username: '@realnathanf',
        followers: '11k',
        FollowersToday: 1099,
        socialMedia: ig
    }
    ,
    {
        username: 'Nathan F.',
        followers: 8239,
        FollowersToday: 144,
        socialMedia: yt
    }
]

export const overview = [
    {
        title: 'Page Views',
        number: 87,
        growth: 3,
        socialMedia: fb
    },

    {
        title: 'Likes',
        number: 52,
        growth: 2,
        socialMedia: fb
    }
    ,
    {
        title: 'Likes',
        number: 5462,
        growth: 2257,
        socialMedia: ig
    },

    {
        title: 'Profile Views',
        number: '52k',
        growth: 1375,
        socialMedia: ig
    },
    {
        title: 'Retweets',
        number: 117,
        growth: 303,
        socialMedia: twt
    },
    {
        title: 'Likes',
        number: 507,
        growth: 553,
        socialMedia: twt
    },
    {
        title: 'Likes',
        number: 107,
        growth: 19,
        socialMedia: yt
    },
    {
        title: 'Total Views',
        number: 1407,
        growth: 12,
        socialMedia: yt
    }
]