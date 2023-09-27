import {Card} from './Card.jsx';

export function Request() {
(async () => { 
    fetch({
        method: 'get',
        url: 'https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=e7b8481d81cc4dfbb047e0955e432611',
    })
    .then(res => {
        console.log("res", res)
        valores = document.getElementById("valores");
        res.data.forEach(actual => {
            return(
            <Card valores={actual}/>)
            }
        )
    })
    .catch(err => console.error("error", err))
    console.log("Fin async consulta - axios")
})();
console.log("Fin consulta - axios")}
