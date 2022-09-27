import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import axios from 'axios'
import ProductCard from '../../components/ProductCard'
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';


const Products = ({ navigation }) => {
    const { loading, error, data } = useFetch(Config.API_URL);

    const handleProductSelect = (id) => {
        navigation.navigate("DetailPage", { id });
    }

    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />;

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <FlatList data={data} renderItem={renderProduct} />
    )
}

export default Products