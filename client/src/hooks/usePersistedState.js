import { useState } from "react";

export default function usePersistedState(key, defaultValue) {

    const [state, setState] = useState(defaultValue);

    const setPersistedState = (value) => {
        setState(value);

        const serializedValue = JSON.stringify(value)
        localStorage.setItem(key, serializedValue);
    }

    return [
        state,
        setPersistedState
    ]
}