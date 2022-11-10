import { Button, Form } from "react-bootstrap"

const InputTodo = ({ handleChange, handleSubmit, todo, edit }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3  w-50 mx-auto" controlId="exampleForm.ControlInput1">
                <Form.Label>Title todo</Form.Label>
                <Form.Control value={todo.title || ""} name="title" onChange={handleChange} type="text" placeholder="Masukan title todo"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3 w-75 mx-auto" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description todo</Form.Label>
                <Form.Control value={todo.desc || ""} name="desc" onChange={handleChange} as="textarea" rows={3} placeholder="Masukan deskripsi"
                    required
                />
            </Form.Group>
            <Button type="submit" className="border mx-auto d-block">
                {edit ? "Edit todo" : "Create todo"}
            </Button>
        </Form>
    )
}

export default InputTodo