import React from 'react';
import { Link } from 'react-router-dom';

interface User {
    id: number;
    firstName: string;
    lastName: string;
}

interface UserListProps {
    users: User[];
    firstName: string;
    lastName: string;
}

const UserList: React.FC<UserListProps> = ({ users }) => {

    return (
        <>
            <section>
                    <section className='header'>
                        <h2>Members List</h2>
                    </section>
                    <section className='table-format'>
                        <table>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>
                                          <p>{user.firstName}</p>
                                        </td>
                                        <td>
                                            <p>{user.lastName}</p>
                                        </td>
                                        <td>
                                            <Link to={`/users/${user.id}`}>
                                                <button>
                                                    View full notes
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
            </section>
        </>
    );
};

export default UserList;