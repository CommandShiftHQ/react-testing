import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header/>', () => {
  it('renders title', () => {
    render(<Header name="Test Name" />);
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Testing React with RTL'
    );
  });

  it('renders logo', () => {
    render(<Header name="Test Name" />);
    expect(screen.getByAltText('Manchester Codes Icon')).toBeInTheDocument();
  });

  it('render subtitle', () => {
    render(<Header name="Test Name" />);
    expect(screen.getByText('by Test Name')).toBeInTheDocument();
  });

  it('renders with expected HTML structure', () => {
    render(<Header name="Test Name" />);
    expect(screen).toMatchSnapshot();
  });
});
