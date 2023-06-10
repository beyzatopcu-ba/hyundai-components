import { apiClient } from "./AxiosInstance";

/**
 * @typedef {object} ProductItem
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {number} price
 * @property {number} discountPercentage
 * @property {number} rating
 * @property {number} stock
 * @property {string} brand
 * @property {string} category
 * @property {string} thumbnail
 * @property {string[]} images
 */

/**
 * @typedef {object} ProductsOfCategoriesResponse
 * @property {ProductItem[]} products
 * @property {number} limit
 * @property {number} skip
 * @property {number} total
 */

const LIMIT = 30;
const URL_READ_PRODUCTS_OF_CATEGORIES = (categoryTitle) => `products/category/${categoryTitle}`;
const URL_READ_ALL_PRODUCTS = (skip) => `products?limit=${LIMIT}&skip=${skip}`;

/**
 * @param {string} categoryTitle 
 * @returns {Promise<ProductsOfCategoriesResponse>}
 */
export const readProductsOfCategories = async (categoryTitle, skip) => {

    if (categoryTitle === 'Tüm Kategoriler') {
        const _skip = skip ? skip : 0;
        const response = await apiClient.get(URL_READ_ALL_PRODUCTS(_skip));
        return response.data;
    }

    const response = await apiClient.get(URL_READ_PRODUCTS_OF_CATEGORIES(categoryTitle));
    return response.data;
};