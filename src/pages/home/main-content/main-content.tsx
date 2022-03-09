import { Box, Button, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react"
import ReactTypingEffect from 'react-typing-effect';
import { useLocation, Link } from "react-router-dom";

export const MainContent = () => {
    const borderColor = useColorModeValue("#444", "#eee")
    const boxShadow = useColorModeValue("rgb(0 0 0 / 80%)", "rgb(0 0 0 / 25%)")
    const location = useLocation()

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
                    <Text>Trabalho a 4 anos na área de tecnologia como desenvolvedor, sendo deles 3 anos como front-end developer e 1 deles como fullstack.</Text>
                </Flex>
                <Flex mt={4} gap={4}>
                    <Button color={"#444"} bg={"#eee"} onClick={() => window.open('https://www.linkedin.com/ambry/?x-li-ambry-ep=AQL0I9ETXlIsMAAAAX9wRbZdhhFxzSjRSMpsl6RsQugyEOMG5seo8tG7L0p2FuSyq8N_P6pL5cyNAtlzxgdl1n8IlBx9thm6SFXgP80J062qwYCjWK5RFjgoQqb2C2Hqa66WkKgGjbEUX6vVgzW86MetIqU2RAdG_I3giWgo2Y4O9OQCVPUgHlr3umxgs4PPYOC7SxwmsxdEZQ_G0ca0TzvV36FseWz4DnCFLeNJf9k-WLkiVjbJpiXkTX0o3Nli_g_EvNUocx6F_VVt0SOh_gPyuirovyTatUQyxJMwR6Hlx1nA-oMGA29iTJjsXuZZHtKtRN7WbZZQv7dBoMlEAMQGNiGJCE6JMuHRNw9WHDwoWzkruhGDdHaAb1PvaGjNzPSoGMfMBpY6dk89zBovAVfaJCcERJk534Wa03lGVnKlgMoc_uos5hQbkuw3Tt0Z8dkPLapdQ6q1gH_hhO5rR41wtZifJBwIM0Pc9x-OSoYIfIsrhKzSI4E4zDr3QP_FRYLjYo64g6qOeIrLdvG-YGcwjPRQXrXaKdSrWaFkbwJw5aAx_X9eMH7Eabv875bpAMz4Uw&x-ambry-um-filename=Profile.pdf')}>Download CV</Button>
                    <Button colorScheme={"blue"} bg={"#007ced"} color={"#fff"} onClick={() => window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5542988775252')}>Contate-me</Button>
                </Flex>

            </Flex>
        </Flex >
    )
}