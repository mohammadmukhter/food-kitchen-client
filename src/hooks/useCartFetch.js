import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';


  const useCartFetch = ()=> {
    const [axiosSecure] = useAxiosSecure();
    const {user, loading}= useContext(AuthContext);
    
    const {data: cart =[], isLoading, error, refetch } = useQuery({ 
      queryKey: ['carts', user?.email],
      enabled:!!user?.email && !!localStorage.getItem('access-token'),

      queryFn: async ()=>  {
        const fetchedData= await axiosSecure.get(`/carts?email=${user?.email}`);
        return fetchedData.data;
      },
    });
    console.log('cartFetcher component rendered ');
    return  [cart, isLoading, error, refetch];  
     
  }

  export default useCartFetch;