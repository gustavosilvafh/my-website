import { Box, useColorModeValue } from "@chakra-ui/react"

interface MainBoxProps {
    children: JSX.Element | string | JSX.Element[]
}

export const MainBox = ({ children }: MainBoxProps) => {
    const bgColor = useColorModeValue("#252525", "#ffffff");
    const color = useColorModeValue('white', 'gray.800')


    return (
        <Box bg={bgColor} color={color} transition="all 0.3s" p="2rem" my={8} borderRadius={40} position="relative" minH={"50vh"}>
            {children}
        </Box>
    )
}