import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Product = () => {
    const[product, setProduct] = useState({//al igual que en la ruta estatica, alojamos la informacion del producto en un useState
        title: "",
        description: ""        
    }) 
    const router = useRouter()
    const { id } = router.query

    useEffect(()=>{
        if (!id) return

        fetch(`https://dummyjson.com/products/${id}`)
            .then((res)=>res.json())
            .then((data)=> {
                //console.log(id)
                setProduct(data)
            })
    }, [id])
  
    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </div>
    )
  }
  
  export default Product