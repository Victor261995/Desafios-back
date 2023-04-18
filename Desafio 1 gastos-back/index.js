import { get,save } from "./filesMethods.js";
import { promptGastos } from "./pricePromps.js";
import inquirer from "inquirer";
const main=async()=>{
 let run =true;
  while (run){
  const action = await inquirer.prompt([

 {
 type:"list",
  name:"chosen",
   message:"Actions",
     choices:[
    {value:1,name:"Añadir gastos"},
    {value:2, name:"ver gastos"},
    {value:3,name:"ver Total"},
    {value:99,name:"exit"},


   ]}
]);
 switch(action.chosen){
  case 1:
    await Añadirgastos();
    break;
case 2:
  await verGastos();
  break;
case 3:
    await verTotal();
    break;
case 99:
  run=false;
  break;
  default:
    run=true;
    break;  
}


}
console.log("paga tu deuda");

}

main()

 async function Añadirgastos(){
   console.log("añadir gasto")
     const newGasto= await promptGastos();

       console.log("Nuevo gasto $",newGasto.gastos);

      const gastosActuales= await get ("gastos");

    gastosActuales.push(newGasto);
   await save("gastos",gastosActuales);

}

  async function verGastos(){
    const gastosActuales=await get ("gastos");
    console.log(gastosActuales);

}
async function verTotal() {
   const gastosActuales = await get("gastos");
    const total = gastosActuales.reduce((acc, gasto) => acc + gasto.gastos, 0);
  console.log("Total de gastos: $", total.toFixed(2));
}