import React, { useState } from "react";

function TodoItem(props) {

    const [newName, setNewName] = useState("");

    const remove = () => {
        setNewName(props.item == newName);
    }
     
    return(
        <div className="todo-item">
            {props.item}
            <button onClick={remove}>삭제</button>
        </div>
    )
};

export default TodoItem;
