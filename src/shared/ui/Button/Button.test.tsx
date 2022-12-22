import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'



describe('classNames', () => {
    test('test', () => {
        render(<Button>test</Button>)
        expect(screen.getAllByText('test')?.[0])
    })
})