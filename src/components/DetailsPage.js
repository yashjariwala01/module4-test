import React from 'react'
import { useSelector } from 'react-redux'


const DetailsPage = () => {
    const postDetail = useSelector(state=> state.Ipost);

  return (
    <div className='w-[90%] m-auto flex flex-col items-center'>
        <h2 className='text-2xl font-semibold mt-7'>Details Page For Post With ID {postDetail.id}</h2>
        <div className='flex flex-col bg-[#E0E0E0]  gap-5 mt-4  border border-solid border-black p-3 rounded-lg sm:w-[50%] md:w-[30%] h-fit'>
            <img className='md:w-full w-full rounded-lg self-center mt-4 ' src={`https://picsum.photos/200?random=${postDetail.id}`} alt="individual details" />
            <div>
                <p>User ID: {postDetail.id}</p>
                <h3 className='text-xl'>Title: {postDetail.title}</h3>
                <p className=''>Body: {postDetail.body}</p>
            </div>
        </div>
    </div>
  )
}

export default DetailsPage
