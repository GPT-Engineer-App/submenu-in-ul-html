import { Container, VStack, Text, UnorderedList, ListItem, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Menu Example</Text>
        <UnorderedList styleType="none">
          <ListItem>
            <Menu>
              <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                Main Item 1
              </MenuButton>
              <MenuList>
                <MenuItem>Sub Item 1.1</MenuItem>
                <MenuItem>Sub Item 1.2</MenuItem>
                <MenuItem>Sub Item 1.3</MenuItem>
              </MenuList>
            </Menu>
          </ListItem>
          <ListItem>
            <Menu>
              <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                Main Item 2
              </MenuButton>
              <MenuList>
                <MenuItem>Sub Item 2.1</MenuItem>
                <MenuItem>Sub Item 2.2</MenuItem>
                <MenuItem>Sub Item 2.3</MenuItem>
              </MenuList>
            </Menu>
          </ListItem>
        </UnorderedList>
      </VStack>
    </Container>
  );
};

export default Index;
