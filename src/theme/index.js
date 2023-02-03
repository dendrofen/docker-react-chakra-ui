import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import config from './foundations/config';
import styles from './foundations/styles';
import fonts from './foundations/fonts';

const theme = extendTheme({
    styles,
    config,
    fonts
}, withDefaultColorScheme({ colorScheme: 'gray' }));

export default theme;