import styles from "./timeline.module.scss";

const timelines = [
  {
    id: 1,
    title: "Hackathon Announcement",
    desc: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    date: "November 18, 2023",
    left: true,
  },
  {
    id: 2,
    title: "Teams Registration begins",
    desc: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    date: "November 18, 2023",
    left: false,
  },
  {
    id: 3,
    title: "Teams Registration ends",
    desc: "Interested Participants are no longer Allowed to register",
    date: "November 18, 2023",
    left: true,
  },
  {
    id: 4,
    title: "Announcement of the accepted teams and ideas",
    desc: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    date: "November 18, 2023",
    left: false,
  },
  {
    id: 5,
    title: "Getlinked Hackathon 1.0 Offically Begins",
    desc: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    date: "November 18, 2023",
    left: true,
  },
  {
    id: 6,
    title: "Demo Day",
    desc: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    date: "November 18, 2023",
    left: false,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className={styles.timeline}>
      <div className={`container`}>
        <div className={styles.header}>
          <h2>Timeline</h2>
          <p>
            Here is the breakdown of the time <br className={styles.mobile} />{" "}
            we anticipate <br className={styles.desktop} /> using for the
            upcoming event.
          </p>
        </div>
        <div className={styles.container}>
          {timelines.map((timeline) => (
            <div key={timeline.id} className={`${styles.timelineContainer} `}>
              <div
                className={`${styles.single} ${
                  timeline.left ? styles.left : styles.right
                }`}
              >
                <div className={styles.content}>
                  <h4>{timeline.title}</h4>
                  <p>{timeline.desc}</p>
                </div>
                <p className={styles.date}>{timeline.date}</p>
                <p className={styles.circle}>{timeline.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
