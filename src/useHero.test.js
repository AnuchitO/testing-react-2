import {renderHook, render, waitFor, act} from '@testing-library/react'
import {useHero} from './useHero'

jest.mock('./http', () => ({
  get: (url) =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            superhero: ['fake'],
          },
        ]),
    }),
}))

describe('test useHero hooks', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should return a hero object', async () => {
    const {result} = renderHook(() => useHero())

    act(() => {
      result.current[1]((current) => ({
        ...current,
        superhero: 'Nong',
      }))
    })

    expect(result.current[0].superhero).toBe('Nong')
  })
})
