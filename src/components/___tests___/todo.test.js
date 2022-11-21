import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer'
import Todo from "../todo";


afterEach(() => {
    cleanup();
})

test('should render non-completed todo component', () => {
    const todo = { id: 1, title: 'Take out the trash', completed: false };
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Take out the trash');
    expect(todoElement).not.toContainHTML('<strike>');
}
)

test('should render completed todo component', () => {
    const todo = { id: 2, title: 'Grocery shopping', completed: true };
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Grocery shopping');
    expect(todoElement).toContainHTML('<strike><h1>Grocery shopping</h1></strike>');
}
)

test('matches snapshot', () => {
    const todo = { id: 1, title: 'Take out the trash', completed: false };
    const tree = renderer.create(<Todo todo={todo} />).toJSON();
    expect(tree).toMatchSnapshot();
})