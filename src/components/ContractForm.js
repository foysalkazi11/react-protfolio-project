import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { notification } from "../utility/notification";

const patterns = {
  email: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
};

const ContractForm = () => {
  const [inputVlaue, setinputVlaue] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [checkValue, setcheckValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  useEffect(() => {
    handleVlidate();
    //eslint-disable-next-line
  }, [inputVlaue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinputVlaue((preValue) => {
      return { ...preValue, [name]: value };
    });
  };
  const handleVlidate = () => {
    if (inputVlaue.name) {
      setcheckValue((pre) => {
        return { ...pre, name: "looks good" };
      });
    } else {
      setcheckValue((pre) => {
        return {
          ...pre,
          name: "please Enter Name"
        };
      });
    }
    if (patterns.email.test(inputVlaue.email)) {
      setcheckValue((pre) => {
        return { ...pre, email: "looks good" };
      });
    } else {
      setcheckValue((pre) => {
        return { ...pre, email: "Enter valid email" };
      });
    }
    if (inputVlaue.subject) {
      setcheckValue((pre) => {
        return { ...pre, subject: "looks good" };
      });
    } else {
      setcheckValue((pre) => {
        return {
          ...pre,
          subject: "Plase enter suject "
        };
      });
    }
    if (inputVlaue.message) {
      setcheckValue((pre) => {
        return { ...pre, message: "looks good" };
      });
    } else {
      setcheckValue((pre) => {
        return {
          ...pre,
          message: "Plase enter message "
        };
      });
    }

    if (
      !inputVlaue.name ||
      !patterns.email.test(inputVlaue.email) ||
      !inputVlaue.subject ||
      !inputVlaue.message
    ) {
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        "user_5diysgdVFXRSdZw9lccAA"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            notification("success", "form submitted successfully");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const submit = (e) => {
    e.preventDefault();
    if (handleVlidate()) {
      sendEmail(e);
      setinputVlaue({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } else {
      notification("error", "please enter all firld");
    }
  };
  return (
    <section id="contract" className="wraper contract-raper">
      <div className="section contract-section">
        <h1>Have me make stuff for you.</h1>
        <form action="#" onSubmit={submit}>
          <div className="inline-form">
            <div className="single-input">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={inputVlaue.name}
                onChange={handleChange}
              />
              {inputVlaue.name && (
                <p
                  className={`${
                    checkValue.name === "looks good" ? "valid" : "unvalid"
                  }`}
                >
                  {checkValue.name}{" "}
                </p>
              )}
            </div>
            <div className="single-input">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={inputVlaue.email}
                onChange={handleChange}
              />
              {inputVlaue.email && (
                <p
                  className={`${
                    checkValue.email === "looks good" ? "valid" : "unvalid"
                  }`}
                >
                  {checkValue.email}{" "}
                </p>
              )}
            </div>
          </div>
          <div className="single-input">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={inputVlaue.subject}
              onChange={handleChange}
            />
            {inputVlaue.subject && (
              <p
                className={`${
                  checkValue.subject === "looks good" ? "valid" : "unvalid"
                }`}
              >
                {checkValue.subject}{" "}
              </p>
            )}
          </div>
          <div className="single-input">
            <textarea
              name="message"
              id="textarea"
              cols="20"
              rows="10"
              placeholder="message"
              value={inputVlaue.message}
              onChange={handleChange}
            />
            {inputVlaue.message && (
              <p
                className={`${
                  checkValue.message === "looks good" ? "valid" : "unvalid"
                }`}
              >
                {checkValue.message}{" "}
              </p>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContractForm;
