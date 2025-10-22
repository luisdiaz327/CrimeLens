import Navigation from '@/components/Navigation'
import AuthorBio from '@/components/AuthorBio'
import React from 'react'

const page = () => {
  return (
    <>
      <Navigation />
      <main className="main">
        <div className="container">
          <h1 className="title">About</h1>

          <div className="about-content">
            <div className="about-intro">
              <p>
                Welcome to <strong>CrimeLens</strong> — jahan fiction ke parde ke peeche chhupa real crime ka sach saamne aata hai.
              </p>
              <p>
                Yahan hum likhte hain un kahaniyon ke baare mein jo TRP se nahi, <strong>truth</strong> se driven hoti hain.
                Jahan har case, har story, aur har detail ek lens ke through dekhi jaati hai — bina filter ke.
              </p>
              <p>
                No drama, no exaggeration — sirf real incidents, verified facts, aur woh sach jo aksar media ignore kar deta hai.
              </p>
              <p>
                Kyunki <strong>CrimeLens</strong> believe karta hai ki sach chupane se nahi,
                <em> samajhne</em> se insaaf milta hai.
              </p>
            </div>
            <AuthorBio
              variant="full"
              showSocial={true}
              showCredentials={true}
              showExpertise={true}
              className="about-author-bio"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default page
