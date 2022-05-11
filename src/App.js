import './App.css';
import { Flex, Image, Switch, useColorMode } from '@chakra-ui/react';
import { CentralTheme, DarkVeryDarkBlue, fbColor, fontFamily, igColor, overview, twtColor, user, ytColor } from './helper';
import React, { useState, useEffect } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

function App() {
  const { elementColor, bgColor, elementTopColor, textColor1, textColor2 } = CentralTheme()
  const [windowSize, setWindowSize] = useState(null)
  const { colorMode, toggleColorMode } = useColorMode()

  const topColor = res => res === 1987 ? fbColor : res === 1044 ? twtColor : res === '11k' ? igColor : res === 8239 ? ytColor : null

  const UserCard = ({ i }) => {
    return (
      <Flex w={['100%', '100%', '22%']} bgColor={elementColor} align='center' my={'10px'} direction='column' borderTop={`3px ${topColor(i.followers)} solid`} _hover={{ opacity: .7 }} cursor='pointer'>
        <Flex direction={'row'} align='center' my={'15px'}>
          <Image src={i.socialMedia} w='20px' h='20px' mr='10px' alt='social media icon' />
          <Flex color={textColor2}>{i.username}</Flex>
        </Flex>
        <Flex direction={'column'} align='center' my={'5px'}>
          <Flex fontWeight={700} fontSize='2rem'>{i.followers}</Flex>
          <Flex color={textColor2} letterSpacing={2}>FOLLOWERS</Flex>
        </Flex>
        <Flex my={'20px'}>
          {
            i.FollowersToday == 144 ?
              <Flex color={'red'} align='center' fontWeight={700}>
                <AiFillCaretDown style={{ marginRight: '5px' }} /> {i.FollowersToday} Today
              </Flex>
              :
              <Flex color={'green'} align='center' fontWeight={700}>
                <AiFillCaretUp style={{ marginRight: '5px' }} /> {i.FollowersToday} Today
              </Flex>
          }
        </Flex>
      </Flex>
    )
  }

  const OverviewCard = ({ i }) => {
    return (
      <Flex w={['100%', '100%', '22%']} bgColor={elementColor} align='center' py={'10px'} my={'10px'} direction='column' borderRadius={'5px'} _hover={{ opacity: .7 }} cursor='pointer'>
        <Flex justify={'space-between'} w='80%' py={'10px'} align='center'>
          <Flex color={textColor2}>{i.title}</Flex>
          <Image src={i.socialMedia} w='20px' h='20px' alt='social media icon' />
        </Flex>
        <Flex justify={'space-between'} w='80%' py={'10px'} align='center' fontWeight={700}>
          <Flex fontSize={'1.5rem'} >{i.number}</Flex>
          <Flex color={i.growth === 2 || i.growth === 19 || i.growth === 12 ? 'red' : 'green'}>{i.growth}%</Flex>
        </Flex>
      </Flex>
    )
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <Flex w={'100%'} h='100vh' fontFamily={fontFamily} justify='flex-start' align={'center'} direction={'column'} >
      <Flex bgColor={bgColor} w={'90%'} h='20vh' my={'10px'} direction={['column', 'column', 'row']} align='center'>
        <Flex w={'100%'} h='auto' py={'10px'} direction={'column'} my='10px' borderBottom={`${windowSize > 700 ? '0px' : '1px'}  #383838 solid`}>
          <Flex fontWeight={700} fontSize={['1.4rem', '1.4rem', '2rem']}>Social Media Dashboard</Flex>
          <Flex color={textColor2} fontSize={['1rem', '1rem', '1.2rem']}>Total Followers: 23.004</Flex>
        </Flex>
        <Flex w={['100%', '100%', '15%']} h='50%' justify={'space-between'} align={'center'}>
          <Flex color={textColor2} fontSize={['1rem', '1rem', '1.2em']}>
            {
              colorMode == 'dark' ?
                'Dark Mode'
                :
                'Light Mode'
            }
          </Flex>
          <Flex>
            {
              windowSize > 800 ?
                <Switch size={'lg'} defaultChecked={true} colorScheme='teal' onChange={toggleColorMode} transform='rotate(180deg)' />
                :
                <Switch size={'md'} defaultChecked={true} colorScheme='teal' onChange={toggleColorMode} transform='rotate(180deg)' />
            }
          </Flex>
        </Flex>
      </Flex>

      <Flex direction={['column', 'column', 'row']} justify='space-between' w='90%' my={'10px'}>
        {
          user.map(i => (
            <UserCard i={i} />
          ))
        }
      </Flex>

      <Flex fontWeight={700} w='90%' alignSelf={'center'} my='10px' justify='flex-start' fontSize={'1.4rem'}>
        Overview - Today
      </Flex>
      <Flex direction={['column', 'column', 'row']} wrap='wrap' justify='space-between' w='90%'>
        {
          overview.map(i => (
            <OverviewCard i={i} />
          ))
        }
      </Flex>
    </Flex>
  );
}

export default App;
