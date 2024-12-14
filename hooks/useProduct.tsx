import { useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from '@/types/include'

export default function useProduct(name: string) {
    const [data, setData] = useState<Product[]>([])

    useEffect(() => {
        axios.post('/api/search', {
            product: name,
        }, {}).then((response) => {
            if (response.status === 200) {
                console.log(response.data)

                /* response.data.forEach((item: Product) => {
                    setData(prevData => [...prevData, {
                        name: item.name,
                        price: item.price,
                        image: item.image,
                    }])
                }) */
            }
        })
    }, [name])

    return data
}