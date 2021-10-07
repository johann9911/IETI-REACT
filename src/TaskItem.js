export const TaskItem = (props) =>{

    const {isChecked, taskName} = props;

    const styleOfComponent = {
        textDecoration:isChecked ? "line-through":""
    }
    return (
        <li>
            <input checked={isChecked} type="checkbox" />
            <span style={styleOfComponent}>{taskName}</span>
        </li>
    )
}

