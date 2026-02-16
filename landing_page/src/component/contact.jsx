import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    console.log({ name, value })
    setForm((prev) => ({ ...prev, [name]: value }))
    // setForm({ ...form, [name]: value })
  }

  function handleSubmit(e){
    e.preventDefault;
    console.log(form);
    alert("Form Submitted!");
  };

  const obj1 = {
    name: "Rishabh",
    email: "rishabh@gmail.com"
  }
  const obj2 = obj1

  const obj3 = {
    name: "Rishabh",
    email: "rishabh@gmail.com"
  }
  const obj4 = {...obj1};
  console.log("Obj4: ", obj4)
  console.log("Logging Obj: ",Object.is(obj3, obj2));

  return (
    
    <section className="contact">
      <div className="contact-card">
        <h1>Contact Me</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-field">
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="contact-field">
            <span>Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <p className="contact-preview">
            Name: {form.name || '-'} | Email: {form.email || '-'}
          </p>
          <button className="contact-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
