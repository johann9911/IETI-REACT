export const TaskItem = (props) =>{

    const {isChecked, taskName} = props;

    return (
        <li>
            <input checked={isChecked} type="checkbox" />
            <span style={{textDecoration:"line-through"}}>{taskName}</span>
        </li>
    )
}

