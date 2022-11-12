import ExampleChangeLanguage from './ChangeLanguage'
import {render, fireEvent, screen} from '@testing-library/react'

describe('ExampleChangeLanguage', () => {
  test('show show language by default', () => {
    render(<ExampleChangeLanguage />)

    const lang = screen.getByText('Language: 🇹🇭 ไทย')

    expect(lang).toBeInTheDocument()
  })

  test('change language', () => {
    render(<ExampleChangeLanguage />)

    fireEvent.click(screen.getByText('Change Language'))

    const lang = screen.getByText('Language: 🏴󠁧󠁢󠁥󠁮󠁧󠁿 English')
    expect(lang).toBeInTheDocument()
  })

  test('have backgroud color red', () => {
    render(<ExampleChangeLanguage />)

    fireEvent.click(screen.getByText('Change Language'))

    expect(screen.getByText('Language: 🏴󠁧󠁢󠁥󠁮󠁧󠁿 English')).toHaveAttribute(
      'style',
      'background-color: green;'
    )
  })
})
