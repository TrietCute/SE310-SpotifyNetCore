import {useState, useEffect} from 'react'
const Index = () => {
    const [users, setUsers] = useState([])


    const showData = async () => {
        const response = await fetch('home/followedartists')
        const data = await response.json()
        setUsers(data)
        console.log(fetch('home/index'))
        console.log(data)
    }

    useEffect(() => {
        showData()
    }, [])

    return (
        <div>
            <table className='table table-striped table-hover mt-5 shadow-lg'>
                <thead>
                    <tr className='bg-curso text-white'>
                        <th>NAME</th>
                        <th>ARTISTS</th>
                        <th>DATE</th>
                        <th>IMAGE</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.Name}</td>
                            <td>{user.Artists}</td>
                            <td>{user.Date}</td>
                            <td><img src={user.ImageUrl} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Index