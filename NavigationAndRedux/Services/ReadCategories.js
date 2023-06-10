import { apiClient } from "./AxiosInstance";
import { uniqueId } from 'lodash';

const URL_READ_CATEGORIES = 'products/categories';

/**
 * @typedef {string} CategoryResponseItem
 */

/**
 * @typedef {object} CategoryItem
 * @property {number} id
 * @property {string} title
 */

export const readCategories = async () => {
    const response = await apiClient.get(URL_READ_CATEGORIES);
    
    return convertCategoriesResponse(response);
};

/**
 * @param {import("axios").AxiosResponse<CategoryResponseItem[]>} response 
 * @returns {CategoryItem[]}
 */
const convertCategoriesResponse = (response) => {
    const categories = [{
        id: 123,
        title: 'Tüm Kategoriler',
    }];
    response.data.forEach((categoryResponseItem) => {
        categories.push({
            id: uniqueId(),
            title: categoryResponseItem,
        });
    });

    return categories;
}

