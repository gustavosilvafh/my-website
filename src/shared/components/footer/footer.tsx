import { Flex, Link } from "@chakra-ui/react"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"

export const Footer = () => {
    return (
        <Flex position={"absolute"} bottom="0" fontSize={20} py={5} >
            <Flex gap={2}>
                <Link href="https://www.instagram.com/gustavosilvafh/" isExternal opacity={0.6} _hover={{ opacity: 1 }}>
                    <FaInstagram />
                </Link>
                <Link href="https://www.twitter.com/gustavosilvafh/" isExternal opacity={0.6} _hover={{ opacity: 1 }}>
                    <FaTwitter />
                </Link>
                <Link href="https://www.linkedin.com/in/gustavosilvafh/" isExternal opacity={0.6} _hover={{ opacity: 1 }}>
                    <FaLinkedin />
                </Link>
                <Link href="https://www.github.com/gustavosilvafh/" isExternal opacity={0.6} _hover={{ opacity: 1 }}>
                    <FaGithub />
                </Link>
                <Link href="https://api.whatsapp.com/send?1=pt_BR&phone=5542988775252" isExternal opacity={0.6} _hover={{ opacity: 1 }}>
                    <FaWhatsapp />
                </Link>
            </Flex>
        </Flex>
    )
}