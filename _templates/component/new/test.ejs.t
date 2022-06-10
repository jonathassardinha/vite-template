---
to: src/ui/components/<%=Name%>/<%=Name%>.test.tsx
---
import { render, screen } from '@testing-library/react';
import { <%=Name%> } from './<%=Name%>';

describe('<<%=Name%> />', () => {
  it('should render properly', () => {
    render(<<%=Name%>>Test</<%=Name%>>);

    expect(screen.getByText("<%=Name%>")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  })
})