import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import TextInput from './TextInput'

test('TextInput Component test', async () => {
    render(<TextInput />)

    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
})

test('TextInput Event test Mod', async () => {
    const user = userEvent.setup()
    render(<TextInput />)

    const inputElement = screen.getByRole('textbox')
    await user.type(inputElement, 'Hello World')
    expect(screen.getByText('Hello World')).toBeInTheDocument()
})
