/* eslint-disable react/jsx-key */
export function Todos({todos}){
    return <div>
        {todos.map((todo)=>{
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button 
                    onClick={()=>{
                        fetch(`http://localhost:3000/completed`,{
                            method: "PUT",
                            body: JSON.stringify({ id: todo._id }),
                            headers: {
                                "content-type": "application/json"
                            }
                        }).then(async (res)=>{
                            const json = await res.json()
                            alert("Marked as Completed")
                        })
                    }}
                >{todo.completed==true ? "Completed" : "Mark as Complete"}</button>
                </div>
        })}
    </div>
}