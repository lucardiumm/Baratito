'use client'

import { Product } from '@/types/include'

export default function Card({ name, price, image }: Product) {
    return (
        <div className={'flex flex-row'}>
            {name}
        </div>
    )
}