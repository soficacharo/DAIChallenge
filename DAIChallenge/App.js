import { React} from 'react';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStack from './navigation/mainStack';

const Stack = createNativeStackNavigator()

export default function App() {


  
  /*const getPlatos = async () => {
    try{
      const resp = await fetch
      (`${'https://api.spoonacular.com/food/products/search?query=yogurt&apiKey='}${'e7b8481d81cc4dfbb047e0955e432611'}`);
      const data = await resp.json();
      
      return data.products;
    }catch(err){
      console.log(err);
    }
    }

    const [platos, setPlatos] = useState([]);

    const traerPlatos = async () => {
      try{
        const data = await getPlatos();
        console.log(data);
        setPlatos(data);
      }catch(err){
        console.log(err)
      }
        };

      useEffect(() => {
        traerPlatos();
        console.log(platos);
      }, []);*/
      



  return (
    <SafeAreaView>
    <MainStack />
    </SafeAreaView>
    
  );
}

