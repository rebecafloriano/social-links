import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('Componente princiapl App', () => {
  it('deve renderizar a quantidade correta de links sociais', () => {
    render(<App />)

    const allLinks = screen.getAllByRole('link')

    expect(allLinks.length).toBe(4)
  })
})
