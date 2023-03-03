import { useState, useCallback } from "react"

export default function useToggleState(initialState = false, [on, off] = [true, false]) {
    const [state, setState] = useState(initialState)

    const toggleState = useCallback(() => {
        setState((s) => (s === on ? off : on))
    }, [on, off])

    return [state, toggleState, setState]
}
