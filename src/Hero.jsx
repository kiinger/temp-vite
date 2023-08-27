import heroImage from "./assets/hero.svg";
import { styled } from "styled-components";

const StyledHero = styled.section`
  .hero-center {
    width: 80vw;
    max-width: 860px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 2rem 1rem;
  }

  .hero-img {
    width: 300px;

    img {
      object-fit: contains;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;
export default function Hero() {
  return (
    <StyledHero>
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Poutine vice lo-fi woke big mood, hoodie deep v DIY marxism
            meditation selfies. Blog stumptown godard waistcoat. Biodiesel venmo
            before they sold out jean shorts keffiyeh chambray. Neutra +1
            leggings meditation, tacos waistcoat microdosing chia prism selfies
            gochujang marfa tousled solarpunk venmo.{" "}
          </p>
        </div>
        <div className="hero-img">
          <img src={heroImage} alt="women with browser" />
        </div>
      </div>
    </StyledHero>
  );
}
