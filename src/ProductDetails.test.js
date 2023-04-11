import { render, screen } from '@testing-library/react';
import ProductDetails from "./components/ProductDetails/ProductDetails";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
        listingsId: '4',
    }),
    useRouteMatch: () => ({ url: '/listings/4' }),
}));
test('Test Product Details page title', () => {
    render(<ProductDetails/>)
    expect(screen.getByText("Bananas($2.49/lb)")).toBeInTheDocument()
});

test('Test Product Details page  List Date', () => {
    render(<ProductDetails/>)
    expect(screen.getByText("Listed: 02-16-2023")).toBeInTheDocument()
});

test('Test Product Details page Contact  Info', () => {
    render(<ProductDetails/>)
    expect(screen.getByText("Listed: 02-16-2023")).toBeInTheDocument()
    expect(screen.getByText("Contact Name: Mike")).toBeInTheDocument()
    expect(screen.getByText("Phone Number: 571-152-8745")).toBeInTheDocument()
});

test('Test Product Details page Location  Info', () => {
    render(<ProductDetails/>)
    expect(screen.getByText("Address: Arlington, VA")).toBeInTheDocument()
});


