import React, { useState } from 'react';
import 'animate.css';

const ListItem = ({ list, deleteHandler, setCheckLength, checkLength }) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkedHandler = () => {
    setIsChecked(!isChecked);
    setCheckLength(isChecked ? checkLength - 1 : checkLength + 1)
  };
  return (
    <li className="list-group-item w-50 my-2 d-flex justify-content-between animate__animated animate__bounce">
      <span className="d-flex align-items-center">
        <span>
          <input
            onChange={checkedHandler}
            type="checkbox"
            className={`me-2`}
            checked={isChecked}
          />
        </span>
        <span className={`${isChecked ? 'text-decoration-line-through animate__animated animate__shakeX' : ''}`}>
          {list.name}
        </span>
      </span>
      <span>
        <i
          onClick={() => deleteHandler(list.id)}
          class="bi bi-trash-fill text-danger"
        ></i>
      </span>
    </li>
  );
};

export default ListItem;
