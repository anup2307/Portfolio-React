export default function Contact(){
    return  (
        <div>
          <h1>Contact</h1>
          <form className="bucket-form" >
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
            ></input>
            <label>Email</label>
            <input
              type="text"
              placeholder="E-mail"
              name="email"
            ></input>
            <label>Message</label>
            <input
              type="text"
              name="message"
            ></input>
            <button >Submit</button>
          </form>
        </div>
      )
}