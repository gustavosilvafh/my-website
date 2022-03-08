import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                background: "#007ced",
                fontFamily: "Helvetica"
            }
        }
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    }
})