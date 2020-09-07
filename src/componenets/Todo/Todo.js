import React from 'react';
import styled from 'styled-components';

const Todo = (props) => {

    const { idx, title , content} = props.todo;
    const {removeTodo} = props;

    const removeEvent = () => {
        if(window.confirm("할일 다했어?")) {
            removeTodo(idx);
        }
    };

    return (
        <React.Fragment>
            <TodoDiv className="todo">
                <TitleP>{title}</TitleP>
                <ContentP>{content}</ContentP>

                <Remove onClick={removeEvent}>삭제</Remove>
            </TodoDiv>

        </React.Fragment>
    )
};

const TodoDiv = styled.div`
    width:500px;
    display:grid;
    grid-template-rows : repeat(3 , 1fr);
    border : 1px solid black;
    border-radius : 3px;
    box-shadow : 0 0 5px 1px grey;
    margin : 10px 0;
    padding : 10px;
    position : relative;
`;

const initP = styled.p`
    margin : 0;
    padding: 0;
`;

const TitleP = styled(initP)`
    font-weight : bold;
    border-bottom : 1px solid #BBB8B8;
`;

const ContentP = styled(initP)`
    padding:5px;
    word-break : break-word
`;

const Remove = styled.button`
    position : absolute;
    bottom : 5px;
    right : 5px;
    background-color : rgb(255 , 77 , 77);
    border: 1px solid black;
    border-radius : 3px;
    color : #FFFFFF;
    padding : 2px 10px;
    
    &:hover {
        cursor : pointer;
    }
`;

export default Todo;