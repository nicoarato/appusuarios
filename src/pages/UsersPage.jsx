import React from 'react'
import { UserRow } from '../components/UserRow';
import { useUsers } from '../hooks/useUsers'


export const UsersPage = () => {

    const { users } = useUsers();

    return (
        <div className="mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <UserRow
                                key={user.email}
                                user={user}
                            />
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
