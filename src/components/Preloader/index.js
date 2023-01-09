import { Box, Center, Text } from "@chakra-ui/react";
import { Image } from "./Image";

export function Preloader() {
    return (
        <Center w={'full'} h={'full'} pos={'fixed'}>
            <Box className="blink">
                <Image />
                <Text fontSize={'lg'}>Boilerplate.</Text>
            </Box>
        </Center>
    )
}