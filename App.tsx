import { createURL, useURL } from 'expo-linking';
import { Routes } from './src/routes';

export default function App() {
  const redirectURL = useURL()

  const url = createURL('product', {})
  console.log(url);

  return (
    <Routes />
  );
}

