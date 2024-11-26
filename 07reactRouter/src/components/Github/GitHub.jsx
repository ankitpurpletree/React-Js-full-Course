import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function GitHub() {
    const data = useLoaderData()
    // const [data, setData] = useState(0);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/ankitpurpletree')
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(data); // Log the API response
    //             setData(data); // Update the state with API data
    //         })
    //         .catch((error) => console.error('There was a problem with the fetch operation:', error));
    // }, []);
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers:{data.followers}
        <img src={data.avatar_url} alt="Git picture" width ={300} />

      
    </div>
  )
}

export default GitHub


export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/ankitpurpletree');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch GitHub user data:', error);
        return { error: error.message }; // Return error information
    }
};
