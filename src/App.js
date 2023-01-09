import React, { Suspense, lazy } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Preloader } from 'components/Preloader';
import theme from 'theme'
import { ColorModeScript } from '@chakra-ui/color-mode';

const Page = lazy(() => import('components/Page'));
function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Suspense fallback={<Preloader />}>
        <Page />
      </Suspense>
    </ChakraProvider>
  );
}

export default App;