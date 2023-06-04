import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMenuFetch = ()=> {
    // const [menuData, setMenuData] = useState([]);

    // useEffect(()=> {
    //     const fetchFunction = async ()=>{
    //         const fetchedData = await fetch('http://localhost:5000/menu');
    //         const data = await fetchedData.json();
    //         setMenuData(data);
    //     }
    //     fetchFunction();
    // },[]);

    const {data: menuData = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async()=> {
            const fetchedData = await axios.get("http://localhost:5000/menu");
            return fetchedData.data;
        }
    })
    
    return [menuData, loading, refetch];
}

export default useMenuFetch;