import {fireEvent, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {ShowCounter} from './ShowCount'

test('show default counter', () => {
  render(<ShowCounter />)

  const counter = screen.getByText(/Who count: 0 times/i)

  expect(counter).toBeInTheDocument()
})

test('show counter with user name', () => {
  render(<ShowCounter />)

  const name = screen.getByPlaceholderText(/Who count/i)
  // fireEvent.input(name, {target: {value: 'Nong'}})
  userEvent.type(name, 'Nong')

  expect(screen.getByText(/Nong: 0 times/i)).toBeInTheDocument()
})

test('get by role user', () => {
  // Arrage
  render(<ShowCounter />)
  const name = screen.getByRole('textbox')
  userEvent.type(name, 'Nong')

  // Act
  const btn = screen.getByRole('button', {name: 'Click here'})
  userEvent.click(btn)

  // Assert
  expect(screen.getByText(/Nong: 1 times/i)).toBeInTheDocument()
})
