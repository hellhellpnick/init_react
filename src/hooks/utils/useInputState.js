import { useState, useCallback } from "react"

export default function useInputState(initialState = "") {
    const [state, setState] = useState(initialState)

    const setInputState = useCallback(
        (event) => setState(event.target.value),
        []
    )

    return [state, setInputState]
}
