import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

  const useCartFetch = ()=> {
    const {user}= useContext(AuthContext);


    const {data: cart =[], isLoading, refetch, error } = useQuery({ queryKey: ['carts', user?.email],
     queryFn: async ()=>  {
        const fetchedData= await fetch(`http://localhost:5000/carts?email=${user?.email}`);
        const data = await fetchedData.json();
        return data;
      },
     });
     
     return  [cart, refetch, isLoading, error];
  }

  export default useCartFetch;