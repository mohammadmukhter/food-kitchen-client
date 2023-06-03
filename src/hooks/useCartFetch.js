import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';


  const useCartFetch = ()=> {
    const {user, loading}= useContext(AuthContext);
    const token = localStorage.getItem('access-token');
      const {data: cart =[], isLoading, error, refetch } = useQuery({ 
        queryKey: ['carts', user?.email], 
        enabled: !loading,
        queryFn: async ()=>  {
          const fetchedData= await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
            headers: {
              'authorization': `bearer ${token}`,
            }
          });
          const data = await fetchedData.json();
          return data;
        },
      });
      console.log('cartFetcher component rendered ');
      return  [cart,isLoading, error, refetch];

     
  }

  export default useCartFetch;