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
  describe('when mounted', () => {
    const { getByRole, screen } = render(
      <Dropdown title="Dummy title" options={[]} />
    );

    it('renders button with correct text', () => {
      expect(getByRole('button')).toHaveTextContent('Dummy title');
    });

    it('has expected HTML structure', () => {
      expect(screen).toMatchSnapshot();
    });
  });

  describe('when button clicked', () => {
    let button;
    beforeEach(() => {
      render(<Dropdown title="Dummy title" options={validProps.options} />);
      button = screen.getByRole('button');
      fireEvent.click(button);
    });

    it('renders correct number of options', () => {
      expect(screen.getAllByTestId('option').length).toBe(2);
    });

    it('updates button with correct value on selection', () => {
      fireEvent.click(screen.getAllByTestId('option')[0]);
      expect(button).toHaveTextContent('Dummy title - Label 1');
    });

    it('has expected HTML structure', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});
