import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import Expenses from "./components/Expenses/Expenses";
const App = () => {

  //it is object array it will pass as an props(properties) in another component dynamicaly 
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      LocationOfExpenditure : 'water',
      date: new Date(2020, 7, 14),
      
    },
    { id: 'e2', title: 'New TV', amount: 799.49, LocationOfExpenditure : 'power', date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      LocationOfExpenditure : 'Auto',
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      LocationOfExpenditure : 'Desk',
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <ExpenseForm/>
      <h2>Let's get started!</h2>
      {/* Dynamicaly call access object inside the jsx and pass props to child ExpenseItem Components inside the {culy braces} on Each ExpenseItem called */}
      
      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} LocationOfExpenditure={expenses[0].LocationOfExpenditure} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} LocationOfExpenditure={expenses[1].LocationOfExpenditure} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} LocationOfExpenditure={expenses[2].LocationOfExpenditure} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} LocationOfExpenditure={expenses[3].LocationOfExpenditure} date={expenses[3].date}></ExpenseItem> */}
 
      <Expenses items={expenses}/>
    </div> 
  );
}

export default App;
