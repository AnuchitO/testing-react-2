import {fireEvent, render, screen} from '@testing-library/react'
import {ShowCounter} from './ShowCount'

test('show default counter', () => {
  render(<ShowCounter />)

  const counter = screen.getByText(/Who count: 0 times/i)

  expect(counter).toBeInTheDocument()
})

test('show counter with user name', () => {
  render(<ShowCounter />)

  const name = screen.getByPlaceholderText(/Who count/i)
  fireEvent.input(name, {target: {value: 'Nong'}})

  expect(screen.getByText(/Nong: 0 times/i)).toBeInTheDocument()
})
