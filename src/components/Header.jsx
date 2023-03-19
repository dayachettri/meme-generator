import trool from '../images/troll-face.png';

export default function Header() {
  return (
    <header className="header">
      <img src={trool} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">Make your memes</h4>
    </header>
  );
}
