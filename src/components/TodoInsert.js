import { MdAdd } from 'react-icons/md';
import React from 'react';
import './TodoInsert.scss';
const TodoInsert = () => {
  return (
    <form action="" className="TodoInsert">
      <input type="text" placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};
export default TodoInsert;
