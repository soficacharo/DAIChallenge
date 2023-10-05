export default function Consulta() {
    const [platos, setPlatos] = useState([]);
axios
// API MARTU: b05a5e76291b48ba9ba54648b74e9fd5
//API SOFI : e7b8481d81cc4dfbb047e0955e432611
.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b05a5e76291b48ba9ba54648b74e9fd5`)
.then((res) => {
setPlatos(res.data.results)})
.catch((error) => {
 console.log(error)
});
;

}