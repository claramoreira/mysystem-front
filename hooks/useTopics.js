import { useState, useEffect } from "react";

const useTopics = (id) => {
    const [allTopics, setAllTopics] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            const rsp = await fetch(`http://localhost:5000/topicsbycommunity/${id}`);
            const topics = await rsp.json();
            setAllTopics(topics);
        };
        fetchTopics();
    }, []);

    return allTopics;
};

export default useTopics;
