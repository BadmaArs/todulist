import { useState } from "react"


function ToDoForm({addTask}){
    const [userImput, setUserInput] = useState('')
    
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userImput)
        setUserInput("")
    }

    const handleKeyPress = (e) => {
         if(e.key === "Enter"){
            handleSubmit(e)
         }
    }

    return(
        <form onSubmit = {handleSubmit}>
            <input 
                value={userImput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите значения..."
            />
            <button> Сохранить </button>
        </form>
    )
}

export default ToDoForm