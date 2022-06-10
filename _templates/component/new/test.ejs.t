---
to: src/ui/components/<%=Name%>/<%=Name%>.test.tsx
---
import { render, screen } from '@testing-library/react';
import { <%=Name%> } from './<%=Name%>';

describe('<<%=Name%> />', () => {
  it('should render properly', () => {
    render(<<%=Name%>>Test</<%=Name%>>);

    expect(screen.getByText(/<%=name%>/i)).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  })
})