import { useLocalStorage } from "./localStorage";

export const useBusketIDs = () => {
    let [busketIDs, setBusketIDs] = useLocalStorage('addedToBusketIDs');
    
    const handleUpdateBusketIDs = (id, clear=false) => {
        if (id !== null && clear === false) {
            if(busketIDs?.length && busketIDs.includes(id)) {
                let busketStorage = busketIDs.filter(elID => id !== elID);
                setBusketIDs(busketStorage);
            } else {
                setBusketIDs([...busketIDs, id])
            }
        } else {
            setBusketIDs([])
        }
    }
    return [busketIDs, handleUpdateBusketIDs];
}