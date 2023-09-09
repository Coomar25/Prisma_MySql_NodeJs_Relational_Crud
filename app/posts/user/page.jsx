import React from 'react'
async function getUsersDataFromAPI() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    return response.json();
}

const User = async () => {
    const users = await getUsersDataFromAPI();
  return (
    <div>
        <h1 > Post Name </h1>
        <ul className='gap-4 flex-col'>
            {
                users.map(user=> {
                    return(
                        <li className='bg-grey-600 p-5 cursor-pointer t' key={user.id}>
                            <h1>Id:- {user.id}</h1>
                            <h2>Name:-{user.name}</h2>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                            <p>{user.address.street}</p>
                            <p>{user.address.geo.lat}</p>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default User


