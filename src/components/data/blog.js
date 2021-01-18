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
        coverImage
        dateAdded
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
        const datePosted = new Date(post.dateAdded).toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" })
        const brief = post.brief.substr(0, 80)
        return <div key={post.cuid} className=" mt-20 text-black w-2/5">
            <div><img src={post.coverImage} /></div>
            <div className="mt-5">
                <p className="my-2">Posted on {datePosted}</p>
                <h1 className="my-3 capitalize text-2xl font-bold">{post.title}</h1>
                <p className="text-lg mb-5">{brief}</p>
                <a className="border-2 p-2 mt-20" href={`https://harone.me/${post.slug}`} >View Post</a>
            </div>
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