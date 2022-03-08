import { Box } from "@chakra-ui/react"

interface BorderLimiterProps {
    children: JSX.Element
}

export const BorderLimiter = ({ children }: BorderLimiterProps) => {
    return <Box w="100%" maxW={1280} margin="auto" p={"1rem"}>
        {children}
    </Box>
}