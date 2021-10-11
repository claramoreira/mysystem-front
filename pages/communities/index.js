import useCommunities from "../../hooks/useCommunities";
import CommunityCard from "../../components/CommunityCard";
import Layout from "../../components/Layout";

const Communities = () => {
    const communities = useCommunities();
    return (
        <Layout>
            <div className="container">
                <div className="row justify-content-evenly">
                    {communities.map((e) => <CommunityCard key={e.communityID} community={e} />)}
                </div>
            </div>
        </Layout>
    )
}

export default Communities;