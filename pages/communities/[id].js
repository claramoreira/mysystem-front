import Layout from "../../components/Layout";
import Community from "../../components/Community";
import { fetchCommunity, fetchCommunityList } from "../../libs/Community";

export default function Comunnity({ commData }) {
    return (
        <Layout>
            <Community commData={commData} />
        </Layout>
    )
}
export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = await fetchCommunityList()
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const commData = await fetchCommunity(params.id)
    return {
        props: {
            commData
        }
    }
}