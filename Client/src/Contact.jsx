import axios from "axios";
import { ToastContainer, toast ,Flip} from "react-toastify";

const Contact = ({ contacts, opacity, url, setId, handlModal }) => {
  const blur = opacity ? "0.2" : "1";

  const deleteContact = async (id) => {
    const api = await axios.delete(`${url}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success(api.data.message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
  };

  return (
    <>
      <div
        className="container my-5"
        style={{ width: "650px", opacity: `${blur}` }}
      >
        {contacts.map((data) => (
          <div
            key={data._id}
            className="bg-black p-3 my-3"
            style={{
              borderRadius: "10px",
              border: "2px solid blue",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              <h3>
                <span className="material-symbols-outlined mx-3">
                  account_circle
                </span>
                {data.name}
              </h3>
              <h4>
                <span className="material-symbols-outlined mx-3">mail</span>
                {data.gmail}
              </h4>
              <h4>
                <span className="material-symbols-outlined mx-3">
                  phone_enabled
                </span>
                {data.phone}
              </h4>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <button
                className="btn btn-primary"
                // onClick={() => {
                //   setId(data._id), handlModal();
                // }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                // onClick={() => deleteContact(data._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contact;
