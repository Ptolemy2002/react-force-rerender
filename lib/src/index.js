import { useState, useCallback } from "react";

export default function useForceRerender() {
    const [, setTick] = useState(0);
    const update = useCallback(() => {
        // Wrapping in setTimeout with 0 delay prevents "Cannot update a component while rendering a different component" error
        // https://stackoverflow.com/a/63659469/7369908
        setTimeout(() => {
            setTick(tick => tick + 1);
        }, 0);
    }, []);

    return update;
}