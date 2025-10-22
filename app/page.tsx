import Navigation from '../components/Navigation';
import { getPostsSummary } from '../utils/blog';
import AnimatedLink from '../components/AnimatedLink';

export default async function Home() {
  const posts = getPostsSummary().slice(0, 3); // Show only the 3 most recent posts

  return (
    <>
      <Navigation />
      <main className="main">
        <div className="container">
          <h1 className="title">CrimeLens</h1>
          <p className="subtitle">
           <b>CrimeLens</b> ek Hinglish true-crime blog hai jahan hum uncover karte hain un real cases ko jinse filmon aur kahaniyon ko inspiration milti hai.<br />
Yahan tumhe milenge India ke  <b>serial killers, unsolved mysteries, aur real court case updates</b> — sab kuch easy language me, verified sources ke sath.<br />
Har article ka focus hota hai facts, not rumours, taaki readers ko mile sach ka pure lens — CrimeLens.
          </p>
          
          <ul className="blog-posts">
            {posts.map((post) => (
              <li key={post.slug}>
                <AnimatedLink href={`/blog/${post.slug}`} className="blog-post-link">
                  <span className="blog-post-date">{post.date}</span>
                  <span className="blog-post-title">{post.title}</span>
                  {/* {post.readTime && <span> • {post.readTime}</span>} */}
                </AnimatedLink>
              </li>
            ))}
          </ul>
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">rss</a>
            <a href="https://github.com/Amitgajare2/nextjs-blog-template" target="_blank" rel="noopener noreferrer">github</a>
            <a href="https://github.com/Amitgajare2/nextjs-blog-template" target="_blank" rel="noopener noreferrer">view source</a>
          </div>
          <div className="copyright">© 2025 MIT Licensed</div>
        </div>
      </footer>
    </>
  );
}
