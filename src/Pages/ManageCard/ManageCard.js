import React from 'react';

const ManageCard = ({user, setNumber}) => {
    const { name, email, from, to, status, _id } = user;
    // const [pan, setPan] = useState(status)
    //delete
    const handleDelete = id => {
        const proess = window.confirm('Are you want to Delete?')
        if (proess) {
            const url = `https://fast-falls-53703.herokuapp.com/booking/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Succesfully Deleted');
                        // const remaining = users.filter(user => user._id !== id);
                        // setUsers(remaining)
                        setNumber(prev => prev + 1)
                    }
                })
        }
    }
    //delete btn style 
    const btnDelete = {
        border: 'none',
        backgroundColor: "#fe8403",
        color: "#fff",
        fontSize: "17px",
        borderRadius: "3px"
    }
    //check
    const handleChange = e => {
        const task = e.target.checked;
        fetch('https://fast-falls-53703.herokuapp.com/booking', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ _id, task })
        }).then(res => res.json())
            .then(result => console.log(result))

        setNumber(prev => prev + 1)
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{from}</td>
            <td>{to}</td>
            <td>{status ? 'Approved' : 'Pandding...'}</td>
            <td><input className="form-check-input" type="checkbox" onChange={handleChange} /></td>
            <td><button style={btnDelete} onClick={() => handleDelete(_id)}><i className="fas fa-trash-alt"></i></button></td>
        </tr>
    );
};

export default ManageCard;