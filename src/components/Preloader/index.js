import { Center, Text } from "@chakra-ui/react";

const Preloader = () => {
    return (
        <Center w={'full'} h={'full'} pos={'fixed'}>
            <Text fontSize={'lg'}>Loading...</Text>
        </Center>
    )
}

export default Preloader;