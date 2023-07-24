import Layout from "./animeComp/Layout";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <Layout></Layout>
    </ChakraProvider>
  );
}

export default App;