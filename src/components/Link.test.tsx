import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Link from './Link'

describe('Componente Link', () => {
  it('deve renderizar o título do link corretamente', () => {
    render(<Link url="https://github.com" title="GitHub" />)

    const linkElement = screen.getByText('GitHub')

    expect(linkElement).toBeInTheDocument()
  })

  it('deve conter os atributos corretos de navegação e segurança', () => {
    render(<Link url="https://github.com" title="GitHub" />)

    const linkElement = screen.getByText('GitHub') as HTMLAnchorElement

    expect(linkElement.href).toBe('https://github.com/')

    expect(linkElement.target).toBe('_blank')
    expect(linkElement.rel).toBe('noreferrer')
  })

  it('não deve quebrar a aplicação se a URL for inválida ou vazia', () => {
    render(<Link url="" title="Link Vazio" />)
    const linkElement = screen.getByText('Link Vazio') as HTMLAnchorElement
    expect(linkElement.getAttribute('href')).toBe('')
  })

  it('deve conter classes de transição corretas para o efeito visual', () => {
    render(<Link url="https://github.com" title="GitHub" />)

    const linkElement = screen.getByText('GitHub')

    expect(linkElement.className).toContain('transition')
  })
})
