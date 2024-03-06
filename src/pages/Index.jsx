import React from "react";
import { Box, Heading, Link, Text, Flex, Spacer, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaHeart, FaComment } from "react-icons/fa";

const stories = [
  {
    id: 1,
    title: "Show HN: My new project",
    url: "https://example.com",
    points: 100,
    user: "johndoe",
    comments: 20,
  },
  {
    id: 2,
    title: "Ask HN: How do you stay motivated?",
    url: "https://example.com",
    points: 80,
    user: "janedoe",
    comments: 15,
  },
  // Add more stories...
];

const Index = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={4}>
      <Flex alignItems="center" marginBottom={4}>
        <Heading size="xl" color="orange.500">
          Hacker News
        </Heading>
        <Spacer />
        <Link href="#" fontWeight="bold">
          login
        </Link>
      </Flex>

      <VStack spacing={4} alignItems="stretch">
        {stories.map((story) => (
          <Box key={story.id} borderWidth={1} borderRadius="md" padding={4}>
            <Flex alignItems="baseline">
              <Text fontSize="xl" fontWeight="semibold" marginRight={2}>
                {story.title}
              </Text>
              <Link href={story.url} color="gray.500" fontSize="sm">
                ({story.url})
              </Link>
            </Flex>
            <HStack spacing={4} marginTop={2}>
              <Text fontSize="sm" color="gray.500">
                {story.points} points
              </Text>
              <Text fontSize="sm" color="gray.500">
                by {story.user}
              </Text>
              <Flex alignItems="center">
                <Icon as={FaComment} marginRight={1} />
                <Text fontSize="sm" color="gray.500">
                  {story.comments} comments
                </Text>
              </Flex>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
