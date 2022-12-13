import React, { useState } from 'react';
import { swalWithBootstrapButtons, Toast } from '../helper';
import Form from './Form';
import ListItem from './ListItem';

const Todo = () => {
  const [lists, setLists] = useState([
    { id: 1, name: 'Mg Mg' },
    { id: 2, name: 'Ag Ag' },
    { id: 3, name: 'Mary' },
  ]);

  const [checkLength, setCheckLength] = useState(0);

  const deleteHandler = (id) => {
    const filterData = lists.filter((list) => list.id !== id);
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
          setLists(filterData);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );
        }
      });
  };

  const addHandler = (name) => {
    const addList = { id: Date.now(), name: name };
    const newList = [addList, ...lists];
    setLists(newList);
    Toast.fire({
      icon: 'success',
      title: 'Create successfully',
    });
  };

  return (
    <div className="m-5 container d-flex justify-content-center flex-column">
      <h1>Todo</h1>
      <Form addHandler={addHandler} />
      <div className="mt-5 d-flex">
        <p className="text-primary fw-bold">Lists</p>
        <p
          className={`btn ${
            lists.length > 0 ? 'btn-primary' : 'btn-success'
          } btn-sm`}
          style={{ marginLeft: '550px' }}
        >
          {lists.length > 0 ? `Done ${checkLength}` : 'all done'}
        </p>
      </div>
      <ul className="list-group">
        {lists.length > 0 ? (
          lists.map((list) => (
            <ListItem
              key={list.id}
              list={list}
              deleteHandler={deleteHandler}
              setCheckLength={setCheckLength}
              checkLength={checkLength}
            />
          ))
        ) : (
          <h3>There is no list</h3>
        )}
      </ul>
    </div>
  );
};

export default Todo;
