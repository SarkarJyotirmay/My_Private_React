const MyDetails = ({name, age, hobby})=>{
    return (
        <>
            <ul>
                <li>Name : {name}</li>
                <li>Age : {age}</li>
                <li>Hobby : {hobby}</li>
            </ul>
        </>
    )
}

export {MyDetails}