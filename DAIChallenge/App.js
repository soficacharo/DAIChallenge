import { React} from 'react';
import { SafeAreaView } from 'react-native';
import { AuthProvider } from './utils/AuthContext';
import Navigation from './navigation/Navigation';
import { ContextProvider } from './utils/contextState';


export default function App() {

  return (
    <ContextProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </ContextProvider>
  );
}