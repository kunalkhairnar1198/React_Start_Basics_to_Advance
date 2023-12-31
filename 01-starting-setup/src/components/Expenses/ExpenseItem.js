import {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card';



const ExpenseItem = (props) => {
    
  const [title, setTitle] = useState(props.title)
  console.log('ExpenseItem evaluated by react')
    const updateHandler = () => {
          setTitle('updated!')
          console.log(title)
    };

    //adding useState when updateAmount click then umount will changed
  const [amount, setAmount] = useState(props.amount)
      const updateAmount =()=>{
          setAmount('100')
          console.log(amount)
      }
    
  return (
   <li> 
      <Card className="expense-item" >

        {/* this ExpenseDate and ExpenseDetail is child component its make reusable component and passing porps in the child components elements */}
      <ExpenseDate date={props.date}/>
      <ExpenseDetail LocationOfExpenditure={props.LocationOfExpenditure} amount={amount}  location={props.location}   title={title} />
      
      {/* state update title and amount in the btns */}
        <button className='expense-item_btn' onClick={updateHandler}>Delete Expense</button>
        <button className='expense-item_btn' onClick={updateAmount}>update amount</button>
      
     </Card>
  </li>
  );
}

export default ExpenseItem;