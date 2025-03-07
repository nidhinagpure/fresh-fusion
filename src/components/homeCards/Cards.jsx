import './../../components/homeCards/Card.css';

export default function Cards(props) {
  const {name , image , title} = props
  return(
    <div>
      <div className="cards-Container">
        <p className="Card-name">{name}</p>
        <img src={image} className='card-Image'/>
        <p className='Card-Title'>{title}</p>
      </div>
    </div>
  );
}
