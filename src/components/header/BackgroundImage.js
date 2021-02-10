import './BackgroundImage.css'
import Title from './Title';
import Nav from './Nav';
import Arrow from './Arrow';

function BackgroundImage({ mobileMode }) {
  return (
    <div className="bg-image">
      <div className="empty-div"></div>
      <div className="app-cont">
        <Title />
        {mobileMode ? <Nav /> : null}
        <Arrow />
      </div>
    </div>
  );
}

export default BackgroundImage;
