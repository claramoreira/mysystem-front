import Footer from "../components/Footer";
import Header from "../components/Header";
import useCommunities from "../hooks/useCommunities";
import CommunityCard from "../components/CommunityCard";

const Communities = () => {
    const communities = useCommunities();
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row justify-content-evenly">
                    {communities.map((e) => <CommunityCard key={e.communityID} community={e} />)}
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Communities;