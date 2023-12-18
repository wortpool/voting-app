import { useSelector } from "react-redux";
import PostItem from "./PostItem";
import { useEffect } from "react";

const QuickPreview = ({isActive, setIsActive}) => {
    const {selectedPosts, tagPosts, isTagLoading, userName, userPosts, isUserLoading, tagName} = useSelector(state => state.postSlice)
    // Тут я хочу винести якось цей обєкт. Думав або ф-цію зробити або окрему компоненту, так як тут юзається дані з useSelector
    const postsData = {
        user: { posts: userPosts, loading: isUserLoading, searchBy: userName},
        tag: { posts: tagPosts, loading: isTagLoading, searchBy: tagName}
    };
    
    const { posts, loading, searchBy } = postsData[selectedPosts] || { posts: [], loading: false,};
    useEffect(() => {
        document.body.style.overflow = isActive ? 'hidden' : 'unset';
    }, [isActive]) 

    return ( 
        <div className={`w-full h-full fixed top-0 left-0 bg-white bg-opacity-20 ${isActive ? 'block' : 'hidden'} flex items-end`}>
            <div className='container overflow-y-scroll scrollbar-hide whitespace-nowrap h-[500px] bg-gray rounded-t-3xl border-2 border-orange px-4 py-2 z-10'>
                <div className="flex justify-between items-center text-white text-xl">
                    <div className="">{`Search By ${selectedPosts}: ${searchBy}`}</div>
                    <button className="" onClick={() => setIsActive(false)}>X</button>
                </div>
                <div className="">
                    {!loading ? (
                        posts.map(post => (
                            <PostItem key={post.question_id} post={post} setIsActive={setIsActive}/>
                        ))  
                    ) : ( 
                        <h1>Loading...</h1>
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default QuickPreview;