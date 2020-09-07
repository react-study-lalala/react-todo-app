import React, {useRef} from 'react';

const TodoInput = (props) => {

     const {createTodo} = props;
     const titleRef = useRef();
     const contentRef = useRef();

     const createTodoEvent = () => {
         const title = getValue(titleRef);
         const content = getValue(contentRef);
         clearInput(titleRef , contentRef)
         createTodo({title , content});
     };

     const getValue = (ref) => {
        return ref.current.value;
     };

     const clearInput = (...ref) => {
         ref.forEach(v => {
             v.current.value = '';
         })
     };

    return (
        <div>
            <label htmlFor="title">할일</label>
            <input type="text" name="title" id="title" ref={titleRef}/>

            <label htmlFor="content">내용</label>
            <input type="text" name="content" id="content" ref={contentRef}/>

            <button onClick={createTodoEvent}>저장</button>

        </div>
    )

};

export default TodoInput;