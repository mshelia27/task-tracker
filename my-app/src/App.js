// import React from 'react'

import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


  const App = () => {
  const [showAddTask, setShowAddTask]= useState(false)
  const [tasks, setTasks]=useState([
    
    {
      id: 1,
      text: 'Doctors appointment',
      day:' Feb 5th at 2:30pm',
      reminder:' true',
  
    },
    {
      id: 2,
      text: 'meeting at school',
      day:' jan 25th at 12:30pm',
      reminder:' true',
  
    },
    {
      id: 3,
      text: 'food shopping',
      day: 'june 7th at 4:30pm',
      reminder: 'false',
  
    },
  
])

//Add Task

const addTask=(task)=>{
  const id= Math.floor(Math.random()*10000)+1
  const newTask={ id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task

const deleteTask=(id)=>{
   setTasks(tasks.filter((task)=>task.id !==id))
}
  // toggle reminder

  const toggleReminder=(id)=>{
     setTasks(tasks.map((task)=>task.id ===id ? {...task, reminder:!task.reminder}:task))
  }

  return (
    <div className='container'>
    <Header onAdd={() => setShowAddTask(!showAddTask)} />
    {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):('No Task to show')}
    
    </div>
  )
} 

/**class App extends React.Component{
  render() {
    return <Header/>
  }  
}**/

export default App
 