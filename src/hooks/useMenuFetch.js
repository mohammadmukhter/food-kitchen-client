import { useEffect, useState } from "react";

const useMenuFetch = ()=> {
    const [menuData, setMenuData] = useState([])

    useEffect(()=> {
        const fetchFunction = async ()=>{
            const fetchedData = await fetch('menu.json');
            const data = await fetchedData.json();
            setMenuData(data)
        }
        fetchFunction();
    },[])
    
    return menuData;
}

export default useMenuFetch;