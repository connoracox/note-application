import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';

const UserDetails = () => {
    const { id } = useParams();
    const { data: note, error, isPending } = useFetch("http://localhost:3000/notes/" + id);


    return (
        <>
            <section className='note-details'>
                {isPending && <p>Loading user notes...</p>}

                {error && <p>{error}</p>}

                {note && (
                    <>
                        <h2>Member {note.member} notes</h2>
                        <h3>{note.id}</h3>
                        <p>{note.text} </p>
                    </>
                )}
            </section>
        </>
    );
};

export default UserDetails;
