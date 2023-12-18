const getPostsData = (selectedPosts, tagPosts, isTagLoading, userName, userPosts, isUserLoading, tagName) => {
    return {
        user: { posts: userPosts, loading: isUserLoading, searchBy: userName },
        tag: { posts: tagPosts, loading: isTagLoading, searchBy: tagName }
    };
};