import React, { useState, useEffect } from 'react'
import CardLayout from '../../components/CardLayout/CardLayout'
import Navbar from '../../components/Navbar/Navbar'
import products from "./products.json"
import './homecontainer.css'

export default function HomeContainer() {

    const [allProducts, setAllProducts] = useState([...products])
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")
    const [quantity, setQuantity] = useState({})
    const [updatedAllProducts, setUpdatedAllProducts] = useState([])

    useEffect(() => {
        setUpdatedAllProducts([...allProducts])
    }, [])
    const getSearch = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    const getCategory = (e) => {
        console.log(e.target.value)
        setCategory(e.target.value)
    }

    //creating object for initial quantity
    useEffect(() => {
        let tempQuantity = {}
        allProducts.map(item => {
            tempQuantity = {
                ...tempQuantity,
                [item["name"]]: 1
            }
        })


        setQuantity({ ...tempQuantity })
    }, [])

    //onchange for getting quantity
    const getQuantity = (e, name) => {

        quantity[name] = e.target.value

        setQuantity({ ...quantity })

    }

    //filter function
    const getFilteredProducts = () => {
        let filteredProducts = allProducts.filter(product => {
            if (search != "") {
                return (product.name).toLowerCase() === search.toLocaleLowerCase()
            }
            else {
                return true
            }

        })
            .filter(product => {
                console.log(category)
                if (category !== "All") {
                    return product.category === category
                }
                else {
                    return true
                }

            })
        console.log(filteredProducts, "56")
        setAllProducts(filteredProducts)
    }

    //onClick of buy button

    const buyProduct = (e, title, price) => {
        allProducts.map(pro => {
            if (pro["name"] === title) {
                if (pro["available"] < parseInt(quantity[title])) {
                    alert("Please check the product availability.")

                }
                else {
                    alert(`Product purchase successfull. Your bill is ${price * parseInt(quantity[title])} rs`)
                    pro["available"] = pro["available"] - parseInt(quantity[title])
                }
            }

        })
        console.log(allProducts, "66")
        setAllProducts([...allProducts])
        resetQuantity()
    }

    //resetting quantity after each buy
    let resetQuantity = () => {
        let tempQuantity = {}
        allProducts.map(item => {
            tempQuantity = {
                ...tempQuantity,
                [item["name"]]: 1
            }
        })


        setQuantity({ ...tempQuantity })
    }

    //resetting filter
    const resetFilter = () => {
        setAllProducts([...products])
        setCategory("All")
    }
    return (
        <>
            <div>
                <Navbar getSearch={getSearch} getCategory={getCategory} getFilteredProducts={getFilteredProducts} resetFilter={resetFilter}  category={category}/>
            </div>
            <div className="product-container">


                {
                    allProducts.length > 0 ?
                        allProducts.map(pro => {
                            return (
                                <>
                                    <CardLayout getQuantity={getQuantity} img={pro.img} name={pro.name} available={pro.available} price={pro.price} category={pro.category} vendor={pro.vendor} buyProduct={buyProduct} quantity={quantity} />
                                </>
                            )
                        })
                        :
                        <>
                            <div>
                                <h3>Dont have any products with current filter</h3>
                            </div>
                        </>
                }
                {
                    console.log(quantity)
                }

            </div>

        </>
    )
}
