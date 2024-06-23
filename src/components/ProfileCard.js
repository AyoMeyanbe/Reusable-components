import '../../src/style.css';
function ProfileCard(props) {
    return(
        <div className='card'>
            <div className='card-image'>
                <img src={props.image} alt='card img' />
            </div>

            <div className='card-content'>
                <div className='media-content'>
                    <p>{props.title}</p>
                    <p>{props.handle}</p>
                </div>
            </div>
            <div className='content'>
                {props.description}
            </div>
        </div>
    );
}

export default ProfileCard;