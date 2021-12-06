import React from "react";
import NextLink from "next/link";
import { Box, Link, Flex, Button, Heading } from "@chakra-ui/core";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { useApolloClient } from "@apollo/client";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [logout, { loading: logoutFetching }] = useLogoutMutation();
  const apolloClient = useApolloClient();
  const { data, loading } = useMeQuery({
    skip: isServer(),
  });

  let body = null;

  if (loading) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Button
            as={Link}
            mr={2}
            variant="unstyled"
            style={{ textDecoration: "none" }}
          >
            Login
          </Button>
        </NextLink>
        <NextLink href="/register">
          <Button
            as={Link}
            mr={2}
            variant="unstyled"
            style={{ textDecoration: "none" }}
          >
            Register
          </Button>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex align="center">
        <Box mr={2}>
          Logged in as: <b>{data.me.username}</b>
        </Box>
        <Button
          onClick={async () => {
            await logout();
            await apolloClient.resetStore();
          }}
          isLoading={logoutFetching}
          variantColor="red"
        >
          Log out
        </Button>
      </Flex>
    );
  }

  return (
    <Flex zIndex={1} position="sticky" top={0} bg="black" color="white" p={4}>
      <Flex flex={1} m="auto" align="center" maxW={800}>
        <NextLink href="/">
          <Link style={{ textDecoration: "none", userSelect: "none" }}>
            <Heading>DAIZAL</Heading>
          </Link>
        </NextLink>
        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </Flex>
  );
};
