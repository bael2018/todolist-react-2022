import { useState } from "react"

export const useInput = (initState) => {
    const [value , setValue] = useState(initState)

    return {
        getter: () => {
            return {
                value,
                onChange: e => setValue(e.target.value)
            }
        },
        clearValue: () => setValue('')
    }
}