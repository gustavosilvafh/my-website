import { Flex, Link } from "@chakra-ui/react"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

export const Footer = () => {
    return (
        <Flex position={"absolute"} bottom="0" fontSize={20} gap={2} py={2} opacity={0.8}>
            <Link href="https://www.instagram.com/gustavosilvafh/" isExternal>
                <FaInstagram />
            </Link>
            <Link href="https://www.twitter.com/gustavosilvafh/" isExternal>
                <FaTwitter />
            </Link>
            <Link href="https://www.linkedin.com/in/gustavosilvafh/" isExternal>
                <FaLinkedin />
            </Link>
            <Link href="https://www.github.com/gustavosilvafh/" isExternal>
                <FaGithub />
            </Link>
        </Flex>
    )
}