import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useIsAdmin = ()=> {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin= [], isLoading: isAdminLoading}= useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled:!!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async()=> {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log(res.data.admin)
            return res.data.admin;
        }
    });
    return [isAdmin, isAdminLoading];
}
export default useIsAdmin;