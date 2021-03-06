import "@fontsource/space-mono";

import { Flex, useColorModeValue } from "@chakra-ui/react";

import { Card } from "./Card";

export const Profile = () => {
    return (
        <Flex
            w={["300px", "327px", "573px", "730px"]}
            borderRadius="15px"
            alignItems="flex-start"
            background={useColorModeValue("white", "blue-high")}
            id="profile"
            py="48px"
            mb="145px"
            mt={["16px", "16px", "15px", "29px"]}
            role="main"
        >
            <Card />
        </Flex>
    );
};
