import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'

const useSeletedClass = () => {
    const { user } = useContext(AuthContext)

    const {  refetch, data: seletedClass = [] } = useQuery({
        queryKey: ['seleted', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/seleted?email=${user?.email}`)
            return res.json()
        },
      })

      return[seletedClass,refetch]
}
export default useSeletedClass