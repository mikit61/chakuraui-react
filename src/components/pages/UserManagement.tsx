import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { UserCard } from "../organism/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  useEffect(() => getUsers(), [getUsers]);
  return (
    <>
      {loading ? (
        <Center height="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap spacing="30px" p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
