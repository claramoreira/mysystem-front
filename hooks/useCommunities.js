import { useState, useEffect } from "react";

const useCommunities = () => {
  const [allCommunities, setAllCommunities] = useState([]);

  useEffect(() => {
    const fetchCommunities = async () => {
      const rsp = await fetch("http://localhost:5000/communities");
      const communities = await rsp.json();
      setAllCommunities(communities);
    };
    fetchCommunities();
  }, []);

  return allCommunities;
};

export default useCommunities;
