import React, { useState } from 'react'

const TextInput = () => {
    const [text, setText] = useState<string>('')

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="Enter some words"
            />
            <p>{text}</p>
        </div>
    )
}

export default TextInput
