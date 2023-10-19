import { data } from '@/mocks/data'
import React from 'react'
import { cookies } from 'next/headers'

async function getData() {
    const name = cookies().get('name')?.value
    name && data.push({ id: data.length + 1, name: name })
    return data;
}

const page = async () => {
    const data = await getData()
    return (
        <>
            {data.map((data) => (
                <div key={data.id}>{data.name}</div>
            ))}
        </>
    )
}

export default page
