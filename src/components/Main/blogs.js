import React, { useEffect, useState } from 'react'
import moment from 'moment'
import './blogs.css'
export default function Blogs() {

    const [profileImage, setProfileImage ] = useState(false)
    const [ article, setArticles ] = useState(false)

    useEffect( () => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alanbanks229')
        .then((res) => res.json())
        .then((data) => {
            const profile_image = data.feed.image
            const posts = data.items.filter(item => item.categories.length > 0)
            // renderBlogCards(posts, profile_image)
            // debugger
            setProfileImage(profile_image)
            setArticles(posts)
        })
    }, [])

    function updateArticlePubDate(publish_string){
        // "2020-04-23 14:59:39"
        // returns "2020-04-23"
        let new_string = publish_string.split((/,| /), 3)[0]

        let dt = moment(new_string, "YYYY-MM-DD")
        return dt.fromNow()+' | ' + dt.format('LL')
    }

    function redirectToSpecificBlog(article){
        let url = article.link
        window.open(url, "_blank")
    }

    return (
        <>
        <div id="main">
        { profileImage && article ? 
        
            <section className="post">
                <header className="major">
                {document.body.offsetWidth >= 980 ? 
                (<h1><a href="https://medium.com/@alanbanks229">Check out my Blogs<br />
                                                                on Medium</a></h1>) : 
                (<h1><a href="https://medium.com/@alanbanks229">Check out<br/> my
                                                                Blogs
					                                            <p style={{textAlign: "center"}}>on Medium</p></a></h1>)}
                </header>
            <hr />
            {article.map((article, index) => (
                <>
                <div className="card_container" onClick={()=> redirectToSpecificBlog((article))}>
                    <div class="blog_card_header">
                        <img src={profileImage}/>
                    <img src={article.thumbnail}/>
                        <p><b>Alan Banks</b>
                        <br/>
                        {updateArticlePubDate(article.pubDate)}
                        </p>
                    </div>

                    <div className="blog_card_title">
                        <header>
                            <h3>{article.title}</h3>
                        </header>
                    </div>

                </div>
                <hr />
                </>
            ))}
            </section> : null }
        </div>
        </>
    )
}
