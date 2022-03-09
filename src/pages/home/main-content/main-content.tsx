import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react"
import ReactTypingEffect from 'react-typing-effect';



export const MainContent = () => {
    const borderColor = useColorModeValue("#444", "#eee")
    const boxShadow = useColorModeValue("rgb(0 0 0 / 80%)", "rgb(0 0 0 / 25%)")
    return (
        <Flex justify="space-around" py={20} width="100%" alignItems={"center"}>
            <Flex width="50%" justify={"center"}>

                <Image src="./assets/images/profile.jpeg" boxSize="350" borderRadius="full" border={`18px solid ${borderColor}`} boxShadow={`0 0 25px 0 ${boxShadow}`} />
            </Flex>
            <Flex width="50%" flexDir={"column"}>
                <Box fontSize={18}>
                    <ReactTypingEffect
                        speed={100}
                        eraseSpeed={50}
                        text={["Software Developer ", "Front-end Engineer ", "FullStack Developer "]}
                        typingDelay={1000}
                        eraseDelay={1000}
                    />
                </Box>
                <Flex flexDir="column" gap={1}>
                    <Text fontSize={40} fontWeight={700}>Gustavo Silva</Text>
                    <Text>Sou nascido em Itapeva - SP, atualmente moro em Guarapuava - PR, onde faço faculdade de Sistemas para internet na UTFPR.</Text>
                    <Text>Um amante de tecnologia e de codificar. Em especial, um apaixonado em resolver problemas. Se você tiver um, me chama!</Text>
                    <Text>Trabalho a 4 anos na área de tecnologia como desenvolvedor, sendo deles 3 anos como front-end developer e 1 dele como fullstack.</Text>

                </Flex>

            </Flex>
        </Flex >
    )
}