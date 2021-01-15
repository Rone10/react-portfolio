import React, { useState, useEffect } from 'react';
import axios from 'axios';

const query = `
{
  user(username:"rone") {               
    publication {
      posts {
        title
        brief
        slug
        cuid
      }
    }
  }
}`;

const url = 'https://api.hashnode.com'
const BlogPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.hashnode.com', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ query }),
            })
            const res = await response.json();
            setPosts(res.data.user.publication.posts);
            console.log(posts)
            // posts: ApiResponse.data.user.publication.posts

        }
        fetchData();
    }, []);
    const articles = posts.map(post => {
        return <div key={post.cuid} className=" mt-20 text-black">
            <h1>Title: {post.title}</h1>
            <p>{post.brief}</p>
            <a href={`https://harone.me/${post.slug}`} >View Post</a>
        </div>
    });

    return (
        <div className="w-3/5 mx-auto">
            <h1>My Blog Articles</h1>
            {articles}

        </div>
    );

}

export default BlogPosts;
// export default App;


// fetchPosts = async () => {
    // const response = await fetch('https://api.hashnode.com', {
    //     method: 'POST',
    //     headers: {
    //         'Content-type': 'application/json',
    //     },
    //     body: JSON.stringify({ query }),
    // })
    // const ApiResponse = await response.json();

//     console.log(ApiResponse.data.user.publication.posts);
//     this.setState({ posts: ApiResponse.data.user.publication.posts, loading: false });


// };




// const BlogPosts = async () => {
//     const response = await fetch('https://api.hashnode.com', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json',
//         },
//         body: JSON.stringify({ query }),
//     })
//     const ApiResponse = await response.json();
//     return (
//         <div id="blog" className="pt-20 w-3/5 mx-auto">
//             <h1 className="text-5xl font-bold">My Blogs</h1>

//             {
//                 ApiResponse.data.user.publication.posts.map(post => {
//                     <div>
//                         <h1>{post.title}</h1>
//                         <p>{post.brief}</p>
//                     </div>
//                 })
//             }
//         </div>
//     )
// };



     //     const result = await axios.get(url, {
            //         params: {
            //             body: JSON.stringify({ query })
            //         }
            //     })
            //     setPosts(result.data.user.publication.posts);

            //     console.log(result.data.user.publication.posts)
            // }