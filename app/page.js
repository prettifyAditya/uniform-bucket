import "../styles/home/home.css"
export default function Home() {
  return (
    <main>
      <div className="banner home-banner">
        <div className="bg">
          <video playsInline autoPlay muted loop width="100%" height="100%" src="assets/video/home-banner.mp4">
          </video>
          <div className="banner-wrapper">
            <div className="container">
              <div className="heading">
                <h3>Corporate Uniform</h3>
                <p>Where Uniform Meets Professionalism</p>
                <a href="" className="btn">
                  shop the collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
