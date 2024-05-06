import { render, screen } from '@testing-library/react';
import ProductHome from './product/ProductHome'
import "@testing-library/jest-dom"
import Home from './pages/Home';
jest.mock("react-router-dom")
import { TextField } from '@mui/material';

describe('Online Shopping Test Suite', () => {
  test("renders 'Table Header id'", () => {
    render(<ProductHome />);
    const linkElement = screen.getByRole("id");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders 'Table Header name'", () => {
    render(<ProductHome />);
    const linkElement = screen.getByRole("name");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders 'Table Header price'", () => {
    render(<ProductHome />);
    const linkElement = screen.getByRole("price");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders 'Table Header category'", () => {
    render(<ProductHome />);
    const linkElement = screen.getByRole("category");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders 'Table Header actions'", () => {
    render(<ProductHome />);
    const linkElement = screen.getByRole("actions");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders 'search'", () => {
    render(<ProductHome />);
    const linkElement = screen.getByPlaceholderText("Search here...");
    expect(linkElement).toBeInTheDocument();
  });

  it('renders the product link', () =>{
    const{ getByRole } = render(<Home />);
    const product = getByRole('productlink');
    expect(product).toBeInTheDocument();
  });

  it('renders the cart link', () =>{
    const{ getByRole } = render(<Home />);
    const cart = getByRole('cartlink');
    expect(cart).toBeInTheDocument();
  });

  test('renders the Product Name TextField component', () => {
    const { getByLabelText } = render(<TextField label="Product Name" />);
    const textField = getByLabelText('Product Name');
    expect(textField).toBeInTheDocument();
  });

  test('renders the Product Name TextField component', () => {
    const { getByLabelText } = render(<TextField label="Product Price" />);
    const textField = getByLabelText('Product Price');
    expect(textField).toBeInTheDocument();
  });

  test('renders the Product Category TextField component', () => {
    const { getByLabelText } = render(<TextField label="Product Category" />);
    const textField = getByLabelText('Product Category');
    expect(textField).toBeInTheDocument();
  });

})

