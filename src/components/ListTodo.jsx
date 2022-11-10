import { Button, ListGroup } from "react-bootstrap"

const ListTodo = ({ todos, onDelete, onEdit }) => {
    console.log(todos)
    return (
        <ListGroup  className="mt-5">
            {todos.map((todo, index) => {
                return (
                    <div>
                        <ListGroup.Item className="shadow d-flex justify-content-between mb-2 w-75 mx-auto" key={index}>
                            {todo.title} - {todo.desc}
                            <div>
                                <Button className="me-3" onClick={(e) => onEdit(e, todo.id)}>Edit</Button>
                                <Button variant="danger" onClick={(e) => onDelete(e, todo.id)}>Delete</Button>
                            </div>
                        </ListGroup.Item>
                    </div>
                )
            })}
        </ListGroup>
    )
}

export default ListTodo