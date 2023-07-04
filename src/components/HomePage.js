import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchPost } from '../redux/Actions/apiActions';
import { postDetails } from '../redux/Actions/detailsActions';

const HomePage = () => {
    const {loading, data, error} = useSelector(state=>state.posts)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(fetchPost())
    },[dispatch])

    const handleClick=(product)=>{
        dispatch(postDetails(product))
        navigate(`/item/${product.id}`)
    }
  return (
    <div>
       {
        loading ? <h1>LOADING...</h1> : error ? <h1>ERROR... YOU ARE LOST</h1> : (
                <div className='w-[90%] m-auto'>
                    <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-2'>
                        {
                    data && data.map(post=>(
                        <div key={post.id} onClick={()=> handleClick(post)} className='Individualpost hover:border-blue-500 hover:border-4 bg-[#E0E0E0] flex flex-col gap-4 m-2 p-2 border border-solid border-black rounded-lg'> 
                            <img className='w-full' src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
                            <div className=' flex flex-col gap-1 justify-between'>
                                <p>User ID: {post.id}</p>
                                <h4 className='text-xl'>Title: {post.title.slice(0,15)}...</h4>
                                <p >Body: {post.body.slice(0,60)}...</p>
                                <p className='mt-3 text-blue-400 font-serif'>Read More...</p>
                            </div>
                        </div>
                    
                    ))
                        }
                    </div>
                </div>
        )
       }
    </div>
  )
}

export default HomePage
