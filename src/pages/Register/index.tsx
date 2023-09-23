import { useEffect, useState, FormEvent } from "react";
import axios from "axios";
import styles from "./register.module.scss";
import img from "../../assets/sitting-man.svg";
import man from "../../assets/man.png";
import woman from "../../assets/woman.png";
import Image from "../../components/Image";
import SuccessAlert from "../../components/Success";
import { AxiosError } from "axios";

type Category = {
  id: number;
  name: string;
};

interface UserData {
  email: string;
  phone_number: string;
  team_name: string;
  group_size: number;
  project_topic: string;
  category: number;
  privacy_policy_accepted: boolean;
}

export default function Register() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [teamName, setTeamName] = useState("");
  const [groupSize, setGroupSize] = useState(1);
  const [projectTopic, setProjectTopic] = useState("");
  const [category, setCategory] = useState(1);
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const groupSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const getCategories = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/hackathon/categories-list");
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!privacyPolicyAccepted) {
      alert("Please accept the policy");
      return;
    }

    const payload: UserData = {
      team_name: teamName,
      category,
      email,
      group_size: groupSize,
      phone_number: phoneNumber,
      privacy_policy_accepted: privacyPolicyAccepted,
      project_topic: projectTopic,
    };

    try {
      await axios.post("/hackathon/registration", payload);
      setShow(true);
      setEmail("");
      setCategory(1);
      setGroupSize(1);
      setPhoneNumber("");
      setPrivacyPolicyAccepted(false);
      setProjectTopic("");
      setTeamName("");
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        const errorData = axiosError.response.data as { email?: string };
        if (errorData.email) {
          alert(errorData.email);
        } else {
          alert("Something went wrong");
        }
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className={styles.register}>
      {show && <SuccessAlert onClose={() => setShow(false)} />}
      <div className={`container ${styles.container}`}>
        <div className={styles.left}>
          <Image src={img} alt="img" />
        </div>
        <div className={styles.right}>
          <h2>Register</h2>
          <div className={styles.movement}>
            <p>Be part of this movement!</p>
            <div className={styles.images}>
              <Image src={man} alt="image" />
              <Image src={woman} alt="image" />
            </div>
          </div>
          <h3>CREATE YOUR ACCOUNT</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <p>
                <label>Team's name</label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Enter the name of your group"
                  required
                />
              </p>
              <p>
                <label>Phone</label>
                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="text"
                  placeholder="Enter your phone number"
                  required
                />
              </p>
            </div>
            <div className={styles.field}>
              <p>
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </p>
              <p>
                <label>Project topic</label>
                <input
                  type="text"
                  value={projectTopic}
                  onChange={(e) => setProjectTopic(e.target.value)}
                  placeholder="What is your group project topic"
                  required
                />
              </p>
            </div>
            <div className={styles.field}>
              <p>
                <label>Category</label>
                <select
                  className={styles.select}
                  value={category}
                  onChange={(e) => setCategory(Number(e.target.value))}
                  required
                >
                  {categories.length &&
                    categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </p>
              <p>
                <label>Group size</label>
                <select
                  className={styles.select}
                  value={groupSize}
                  onChange={(e) => setGroupSize(Number(e.target.value))}
                  required
                >
                  {groupSizes.map((size) => (
                    <option value={size} key={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </p>
            </div>
            <div className={styles.review}>
              <p>Please review your registration details before submitting</p>
              <div className={styles.check}>
                <input
                  type="checkbox"
                  checked={privacyPolicyAccepted}
                  onChange={(e) => setPrivacyPolicyAccepted(e.target.checked)}
                  required
                />
                <p>
                  I agreed with the event terms and conditions and privacy
                  policy
                </p>
              </div>
            </div>
            <button disabled={loading}>
              {loading ? "Please wait..." : "Register now"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
