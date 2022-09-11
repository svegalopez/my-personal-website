export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__heading">
          <h1>I am Sebastian</h1>
          <h1>I build Software</h1>
        </div>
      </section>

      <section className="home-image"></section>

      <section className="home-copy">
        <p>
          I am an enthusiastic full stack developer with 8 years of experience
          in various domains including medical device, aviation, and commodities
          trading.
        </p>
        <p>
          My strongest skills are around node.js, react, SQL, typescript,
          API-development, testing, jest, cypress, event-driven systems, and
          AWS.
        </p>
        <p>
          My proudest achievement is to have contributed over 70 Pull Requests
          to{" "}
          <a target="_blank" href="https://proknow.com">
            ProKnow
          </a>
          , currently used in various large institutions around world.
        </p>
      </section>

      <section className="home-cta">
        <button className="home-cta__btn">my work</button>
      </section>
    </>
  );
}
