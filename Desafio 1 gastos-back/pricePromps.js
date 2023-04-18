import inquirer from 'inquirer';
 export async function promptGastos() {
        const answers = await inquirer.prompt([
          {
            type: "number",
            name: "gastos",
            message: "Por cuánto te endeudaste?:$ ",
          }
        ]);
        return answers;
      }
      