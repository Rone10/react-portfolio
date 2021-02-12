import React, { useState, useEffect } from 'react';
import LoadSpinner from '../LoadSpinner'

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
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ query }),
            })
            const res = await response.json();
            setPosts(res.data.user.publication.posts);
            // console.log(posts)
            // posts: ApiResponse.data.user.publication.posts

        }
        fetchData();
    }, [posts]);
    const articles = posts.map(post => {
        const datePosted = new Date(post.dateAdded).toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" })
        const brief = post.brief.substr(0, 80)
        return <div key={post.cuid} className="  text-black  w-full my-5 border-black pb-3 cursor-pointer rounded-md border-b-4">
            <a target="_blank" className="" href={`https://harone.me/${post.slug}`} >
                <div><img className="rounded-t-lg" src={post.coverImage} alt="img" /></div>
            </a>

            <div className="mt-3">
                <p className="my-1">Posted on {datePosted}</p>
                <a className="" target="_blank" href={`https://harone.me/${post.slug}`} >
                    <h1 className="my-1 capitalize text-2xl font-bold">{post.title}</h1>

                </a>
                <p className="text-lg mb-5">{brief}</p>
                <a className="border-2 p-2 mt-20 hover:bg-black hover:text-white" href={`https://harone.me/${post.slug}`} >View Post</a>
            </div>
        </div>

    });

    const message = "Fetching Posts"
    return (
        <div className="w-full lg:w-4/5 items-center mx-auto ">
            <div className="md:mb-10 capitalize font-bold text-center md:text-5xl text-3xl"><h1 >My Blog Articles</h1></div>
            {
                posts.length > 0 ?
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 mt-10 p-2">
                        {articles}
                    </div> :
                    <LoadSpinner message={message} />
            }
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