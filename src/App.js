import Card from "./components/Card";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <>
      <h1>Me apague quando for iniciar!</h1>
      <p>Chame o Card aqui!</p>
      <Flex display="flex" flexDirection="row" flexWrap="wrap" gap="5px" justifyContent="center">
        {users.map((user) => {
          return <Card key={user.id} user={user} />;
        })}
      </Flex>
    </>
  );
}
