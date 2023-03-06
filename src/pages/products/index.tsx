import Link from "next/link"
import { useEffect, useState } from "react"

interface Product {
    id: number
    title: string
    description: string
}

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]) // <> inicializa el estado local products con un arreglo vacío de objetos de tipo Product

    useEffect(() => {
        fetch("https://dummyjson.com/products/")
            .then((res) => res.json())
            .then((data) => { //también se puede con.then(({products})
                //console.log(data)
                setProducts(data.products)// tb se puede con setProducts(products)
            })
    }, [])

    return (
        <main>
            <h1>Products</h1>
            <ul>
            {products.map((product: Product)=>(
                
                    <li key={product.id}>
                        <Link href={"/products/" + product.id}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </main>

    )
}

export default Products

/**
 * {products?.map(({ id, title })=>(
 **************Código entre <ul> </ul>

El operador de encadenamiento opcional ?. se utiliza en la expresión {products?.map((...)=>{...})} 
para verificar si la variable products tiene un valor null o undefined. Si products es null o undefined,
la expresión se detiene y no se ejecuta el método map(), y no se mostrará ninguna lista en la pantalla.
Por lo tanto, es importante utilizar el operador de encadenamiento opcional para evitar errores de referencia
en tiempo de ejecución y mejorar la robustez del código.

Otras formas de escribir el mismo código sería:
            <ul>
                {products && products.map(function (product) {
                    return (
                        <li key={product.id}>
                            <Link href={"/products/" + product.id}>{product.title}</Link>
                        </li>
                    )
                })}
            </ul>


            <ul>
                {products?.map(({id, title})=>{   // Cada elemento del arreglo se desestructura en dos propiedades (id y title) y se utiliza para renderizar un elemento de lista con estos valores.
                    return(
                    <li key={id}> 
                    <Link href={"/products/"+id}>{title}</Link> 
                    </li>
                    )
})}
            </ul>


donde se utiliza un operador de cortocircuito && para verificar si la variable products tiene un valor 
verdadero. Si es así, se llama al método map() en el arreglo products y se utiliza una función anónima 
para renderizar el elemento de lista.

 Otra forma de escribir el código que va entre las etiquetas <ul>:

 */