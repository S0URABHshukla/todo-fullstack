const url="http://localhost:4000"
export const getTodo=async (setTodo)=>
{
    const res=await fetch(url);
    const data=await res.json();
    setTodo(data);
}