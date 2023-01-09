import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import { GithubCorner } from "./GtihubCorner";

export default function Page() {
    return (
        <Center h={'100vh'}>
            <Stack>
                <Heading>React + Chakra UI</Heading>
                <Text>Create React App. Boilerplate.</Text>
            </Stack>

            <GithubCorner />
        </Center>
    )
}