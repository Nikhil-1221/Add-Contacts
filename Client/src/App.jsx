import { useEffect, useState } from "react";
import axios from "axios";
import Contact from "./Contact";
import AddContact from "./AddContact";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [id, setId] = useState("");

  const url = "https://add-contact.onrender.com"||"http://localhost:5000";
  

  useEffect(() => {
    const fetchData = async () => {
      const api = await axios.get(`${url}/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setContacts(api.data.contact);
    };
    fetchData();
  }, [contacts,id]);
  

  const handlModal = () => {
    setShowModal(!showModal);
    setOpacity(!opacity);
  };

  return (
    <>
      <ToastContainer/>
      <AddContact
        handlModal={handlModal}
        showModal={showModal}
        url={url}
        id={id}
        setId={setId}
        contacts={contacts}
      />
      <Contact
        contacts={contacts}
        opacity={opacity}
        url={url}
        setId={setId}
        handlModal={handlModal}
      />
    </>
  );
}

export default App;
