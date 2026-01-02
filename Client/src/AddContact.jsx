import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast,Flip } from "react-toastify";

const AddContact = ({ handlModal, showModal, url, id, setId, contacts }) => {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    if (id) {
      for (let i = 0; i, contacts.length; i++) {
        if (id === contacts[i]._id) {
          setName(contacts[i].name);
          setGmail(contacts[i].gmail);
          setPhone(contacts[i].phone);
          break;
        }
      }
    }
  }, [id]);
  const resetModel = () => {
    setName("");
    setGmail("");
    setPhone("");
    setId("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    handlModal();
    if (id) {
      const api = await axios.put(
        `${url}/${id}`,
        { name, gmail, phone },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
    } else {
      // send data to api
      const api = await axios.post(
        `${url}/`,
        { name, gmail, phone },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
    }
    resetModel();
  };

  return (
    <>
      <div className="container mt-5" style={{ width: "150px" }}>
        <button className="btn btn-warning" onClick={handlModal}>
          Add Contact
        </button>
        {/* <!-- Modal --> */}
        {showModal && (
          <div
            className="modal"
            tabIndex="-1"
            role="dialog"
            style={{ display: "block" }}
          >
            <div className="modal-dialog" role="document">
              <div
                className="modal-content bg-dark text-white p-3"
                style={{ border: "2px solid yellow" }}
              >
                <div className="modal-header d-flex justify-content-center align-items-center">
                  <h3 className="text-center">
                    {id ? "Edit Contact" : "Add Contact"}
                  </h3>
                </div>
                <div className="modal-body p-3">
                  {/* form */}
                  <form onSubmit={submitHandler}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nameInput"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Gmail address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="gmailInput"
                        aria-describedby="emailHelp"
                        value={gmail}
                        onChange={(e) => setGmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phoneInput"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-4">
                      <button type="submit" className="btn btn-primary mx-3">
                        {id ? "Edit Contact" : "Save Contact"}
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger "
                        onClick={handlModal}
                        // onClick={()=>{handlModal(),resetModel()}}
                      >
                        Cancle
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddContact;
