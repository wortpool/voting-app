import axios from "axios"

export const fetchPosts = async (query, searchType) => {
    const posts = await axios.get(`${process.env.REACT_APP_API_BASE_LINK}/2.3/search?order=desc&sort=relevance&${searchType === 'title' ? 'intitle' : 'tagged'}=${query}&site=stackoverflow`)
    return posts
}

export const fetchUserPosts = async (id) => {
    const posts = await axios.get(`${process.env.REACT_APP_API_BASE_LINK}/2.3/users/${id}/questions?order=desc&sort=votes&site=stackoverflow`)
    return posts
}