import { useMemo } from "react"

const list = [
    {name:"John", id: 1, age: 20,},
    {name:"Kate", id: 2, age: 19,},
    {name:"Bill", id: 3, age: 15,},
    {name:"Nick", id: 4, age: 8,},
    {name:"Andy", id: 5, age: 30,},

]

export function FilteredList() {
    const users = useMemo(() => list.map((user) => user.age >= 18 && <li key={user.id}>{user.name} - {user.age}</li>), [] )

    return (
        <>
            <ul>
                {users}
            </ul>
        </>
    )
}