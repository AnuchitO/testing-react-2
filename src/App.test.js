import {render, screen} from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)

  const nong = screen.getByText(/Hello Nong/i)

  expect(nong).toBeInTheDocument()
})
