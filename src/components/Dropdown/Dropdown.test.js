import { fireEvent, render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

const validProps = {
  title: 'Dummy title',
  options: [
    {
      id: 1,
      label: 'Label 1',
    },
    {
      id: 2,
      label: 'Label 2',
    },
  ],
};

describe('<Dropdown/>', () => {
  it('renders button with correct text', () => {
    const { getByRole } = render(<Dropdown title="Dummy title" options={[]} />);
    expect(getByRole('button')).toHaveTextContent('Dummy title');
  });

  it('renders correct number of options', () => {
    render(<Dropdown title="Dummy title" options={validProps.options} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getAllByTestId('option').length).toBe(2);
  });

  it('updates button with correct value on selection', () => {
    render(<Dropdown title="Dummy title" options={validProps.options} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    fireEvent.click(screen.getAllByTestId('option')[0]);
    expect(button).toHaveTextContent('Dummy title - Label 1');
  });
});
