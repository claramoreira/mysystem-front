import Image from 'next/image';
import useTopics from '../hooks/useTopics';
import styles from './community.module.css';

export default function Community({ commData }) {
    const topics = useTopics(commData.communityID);
    return (
        <div className="container-fluid my-4">
            <div className="row">
                <div className="col-sm-2 col-12">
                    <Image src="/static/images/image01.png" alt={commData.communityName} width={450} height={450} />
                </div>
                <div className="col-sm-10 col-12">
                    <h2 className={styles.commName}>{commData.communityName}</h2>
                    <br />
                    <p>{commData.communityDescription}</p>
                    <br />
                    <div className="row">
                        <div className="col-sm-3 col-12 m-2 border flex-column justify-content-center">
                            <h6><b>Membros:</b></h6>
                            115
                        </div>
                        <div className="col-sm-3 col-12 m-2 border flex-column justify-content-center">
                            <h6><b>Tópicos:</b></h6>
                            50
                        </div>
                        <div className="col-sm-3 col-12 m-2 border flex-column justify-content-center">
                            <h6><b>Posts:</b></h6>
                            65
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <h5>Fórum:</h5>
                {topics.map((topic) => <h6 key={topic.topicID}>{topic.topicName}</h6>)}
            </div>
        </div>
    )
}