'use client'

import Card from '@/components/ui/Card'
import { Product } from '@/types/include'
import axios from 'axios'
import { useState } from 'react'

export default function Page() {
    const [search, setSearch] = useState('Jabon')
    const [products, setProducts] = useState<Product[]>([])

    const Press = async () => {
        await axios.post('/api/search', {
            product: search,
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
    }

    return (
        <>
            <div className={'flex flex-1 w-screen h-screen justify-center content-center items-center bg-'}>
                <input type={'text'} placeholder={'Jabon'} value={search} onChange={(e) => {
                    setSearch(e.target.value)
                }} className={''} onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        Press()
                    }
                }} onSubmit={() => {
                    Press()
                }} />

                {products.map((product, i) => (
                    <Card key={i} name={product.name} image={product.image} price={product.price} />
                ))}
            </div>
        </> 
    )
}