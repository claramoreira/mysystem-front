const fetchCommunity = async (id) => {
    const rsp = await fetch(`http://localhost:5000/communities/${id.toString()}`);
    const comm = await rsp.json();
    return { id, ...comm }
}

const fetchCommunityList = async () => {
    const rsp = await fetch(`http://localhost:5000/communities`);
    const communities = await rsp.json();
    const comms = communities.map((comm) => ({
        params: { id: comm.communityID.toString() },
    }))
    return comms;
}

export { fetchCommunity, fetchCommunityList };
