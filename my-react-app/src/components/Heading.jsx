import './Heading.css'
import profile from './profile_picture.jpg'

function Heading(props) {
    return(
        <>
            <div className="header">
                <img src={profile} className="profile-pic"></img>
                <div className="name_options_stats">
                    <div className="name_options">
                        <p className="UserName">bonkzicle</p>
                        <div className="options">
                            <button class="buttons" type="button">Follow</button>
                            <button class="buttons" type="button">Message</button>
                        </div>
                    </div>
                    <div className="stats">
                        <p>{props.posts} posts</p>
                        <p>{props.followers} followers</p>
                        <p>{props.following} following</p>
                    </div>
                        <p style={{margin: 0}}>Dhruv Patel</p>
                        <p style={{margin: 0}}>Sometimes I post stuff on here.</p>
                        <p style={{margin: 0}}>UNC 28'</p>
                </div>
            </div>
            <div class="line-two"></div>
        </>
    );
}

export default Heading