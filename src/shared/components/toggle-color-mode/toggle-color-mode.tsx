import { IconButton, useColorMode, useColorModeValue, Flex } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

export const ToggleColorMode = () => {
    const { toggleColorMode } = useColorMode()
    const bgColor = useColorModeValue("#ffffff", "#252525");

    const text = useColorModeValue("dark", "light")
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)

    return (
        <Flex justify={"flex-end"}>
            <IconButton
                bg={bgColor}
                size="md"
                fontSize="lg"
                variant="ghost"
                color="current"
                marginLeft="2"
                onClick={toggleColorMode}
                icon={<SwitchIcon color="$ffffff" />}
                aria-label={`Switch to ${text} mode`}
            />
        </Flex>

    )
}