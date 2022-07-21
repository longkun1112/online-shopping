import React, { useEffect } from 'react'

import Helmet from '../components/Helmet'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'

import productData from '../assets/fake-data/products'
import { useDispatch, useSelector } from 'react-redux'

const Product = props => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "GET_ALL_INFO"})
    }, []);
    
    const {dataInfo, isLoading} = useSelector(state => state.InfoReducer)
    console.log('dataInfo', dataInfo)

    // const product = productData.getProductBySlug(props.match.params.slug)

    // const relatedProducts = productData.getProducts(8)

    const product = dataInfo.find(e => e.slug === props.match.params.slug)

    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [product])

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product}/>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product
