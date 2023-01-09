import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: true,
    }
}, withDefaultColorScheme({ colorScheme: 'telegram' }));
export default theme;