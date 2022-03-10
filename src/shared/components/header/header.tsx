import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export const Header = () => {
    return (
        <Flex justifyContent="space-between" align="center">
            <Flex gap={4} align="center">
                <Avatar name="Gustavo" bg={"#007ced"} fontWeight={700} />
                <Text fontSize={24} display="flex" gap={2}><Text fontWeight={700}>Gustavo</Text>Silva</Text>
            </Flex>
            <Flex gap={6} display={["none", "none", "inherit"]}>
                <Box transition="all 0.2s" _hover={{ transform: "scale(1.1)" }}>
                    Sobre mim
                </Box>
                <Box transition="all 0.2s" _hover={{ transform: "scale(1.1)" }}>
                    Resumo
                </Box>
                <Box transition="all 0.2s" _hover={{ transform: "scale(1.1)" }}>
                    Portfólio
                </Box>
                <Box transition="all 0.2s" _hover={{ transform: "scale(1.1)" }}>
                    Contato
                </Box>
            </Flex>
        </Flex>
    )
}