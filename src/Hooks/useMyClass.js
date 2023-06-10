import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'

const useMyClass = () => {
    const { user } = useContext(AuthContext)

    const { refetch, data: itemClass = [] } = useQuery({
        queryKey: ['seleted', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`)
            return res.json()
        },
      })

      return[itemClass,refetch]
}
export default useMyClass