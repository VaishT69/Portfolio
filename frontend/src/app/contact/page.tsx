// import { useState } from "react";

export default function Contact() {
  //   const [formData, setFormData] = useState({
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //     contact_number: "",
  //   });

  //   const [errors, setErrors] = useState({
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //     contact_number: "",
  //   });

  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({
  //         ...formData,
  //         [name]: value,
  //     });
  // };

  // const validateForm = () => {
  //     let isValid = true;
  //     let errorMessages = { first_name: "", last_name: "", email: "", contact_number: "" };

  //     if (!formData.first_name) {
  //         errorMessages.first_name = "NAME IS REQUIRED";
  //         isValid = false;
  //     }
  //       if (!formData.last_name) {
  //         errorMessages.last_name = "LAST NAME IS REQUIRED";
  //         isValid = false;
  //     }
  //       if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
  //         errorMessages.email = "NAME IS REQUIRED";
  //         isValid = false;
  //     }
  //       if (!formData.contact_number) {
  //         errorMessages.contact_number = "NAME IS REQUIRED";
  //         isValid = false;
  //     }

  //     setErrors(errorMessages)
  //     return isValid;
  // }

  return (
    <main>
      <section className=" py-12 bg-gray-950">
        <h1 className="text-center justify-center mt-10 text-3xl">Hey</h1>

        <div className="p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="items-center w-full max-w-2xl px-10 rounded-2xl bg-gray-800">
              <div className="w-full mt-4 p-4 md:p-8 ">
                <p className="text-lg mb-2 text-center ">
                    Fell fe
                </p>
                <hr className="w-full mb-10"/>
                <form className="flex flex-col gap-3 max-w-md mx-auto ">
                  <input
                    type="text"
                    placeholder="First Name"
                    // value={formData.first_name}
                    // onChange={handleChange}
                    className="bg-white h-10 p-4 border-2 rounded-4xl border-amber-400"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    // value={formData.last_name}
                    // onChange={handleChange}
                    className="bg-white h-10 p-4 border-2 rounded-4xl border-amber-400"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="bg-white h-10 p-4 border-2 rounded-4xl border-amber-400"
                  />
                  <input
                    type="Number"
                    placeholder="Contact Number"
                    // value={formData.contact_number}
                    // onChange={handleChange}
                    className="bg-white h-10 p-4 border-2 rounded-4xl border-amber-400"
                  />
                  <div className="flex items-center justify-center">
                    <button className="w-20 h-10 rounded-3xl bg-white ">
                      {" "}
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-full border-2 h-[]"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
