import { Card } from "react-bootstrap";

export default function CommunityCard(props) {
    return (
        <>
            <div className="p-2 m-2 card" style={{ width: "180px" }}>
                <img src="/static/images/image01.png" className="card-img-top" style={{ width: "150px" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.community.communityName}</h5>
                    <p className="card-text">{props.community.communityDescription}</p>
                </div>
            </div>
        </>
    )
}