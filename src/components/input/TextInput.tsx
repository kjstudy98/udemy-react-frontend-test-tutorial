import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const TextInput = () => {
    const [text, setText] = useState<string>('')

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="Enter some words"
                className="bg-blue-300 py-3 px-2"
            />
            <Input />
            <p>{text}</p>
            <Button className="mt-10">Submit</Button>
        </div>
    )
}

export default TextInput
