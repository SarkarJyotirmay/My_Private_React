const data = [
    {id:1,name:"Jyoti", age:22},
    {id:2,name:"Chirag", age:25},
    {id:3,name:"Tanmay", age:26},
    {id:4,name:"Deep", age:24},
]

function Lists(){
    return (
        <>
            <ul>
                {
                data.map((obj)=>{
                    return <li key={obj.id}>{obj.name} {obj.age}</li>
                }) 
                }
            </ul>
        </>
    )
}

export {Lists}