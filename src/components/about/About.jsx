import './about.scss';
import '../../assets2/WebsiteContent/HandDrawnAssets/introbackground.png';

export default function About() {
  return (
    <div
      className="about"
      id="about"
      style={{
        backgroundImage: 'url(' + 'assets/aboutbackground4.png' + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="left"
        style={{
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        <div className="imgContainer">
          <img
            src="https://i.imgur.com/3vw9cem.jpg"
            title="source: imgur.com"
          />
        </div>
      </div>
      <div className="right">
        <div class="gradient"></div>
        <div class="gooey"></div>
        <div className="wrapper">
          <h2>👋 Nice to meet you!</h2>
          <p>
            {' '}
            I’m Ena. It rhymes with Jenna! I’m a Systems Design Engineering
            student at the University of Waterloo.
            <br /> 🎨🚉👾
            <br /> <br />
            I'm currently pursuing product design and product management
            opportunities. When I'm not working, you can find me making art,
            brushing up on my language skills, or telling really awful jokes.
            <br /> <br />
            See my work below!
          </p>
        </div>
      </div>

      <a href="#portfolio">
        <img src="assets/WebsiteContent/HandDrawnAssets/arrowdown.png" alt="" />
      </a>
    </div>
  );
}
