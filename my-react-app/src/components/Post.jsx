import "./Post.css"
import Modal from "./Modal";

function posts(props) {
    return (
        <>
            <div className="Post" onclick={()=> props.setIsModalOpen(!props.isModalOpen)}>
                <img src={props.picture}></img>
            </div>
        </>
    );
}
export default posts