---
to: src/ui/components/<%=Name%>/<%=Name%>.tsx
---
import { ReactNode } from 'react'

export interface <%=Name%>Props {
  children: JSX.Element | JSX.Element[] | ReactNode
}

export function <%=Name%>({ children }: <%=Name%>Props) {
  return <div>
    <%=Name%>
    { children }
  </div>
}
