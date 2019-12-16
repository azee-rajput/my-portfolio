// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div className="contact" id="contact">
            <h2>Contact</h2>
            <p>If you liked some of my projects and the work I've done so far, please feel free to contact me. 
                    I'm currently looking for an entry level position.
            </p>

            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/xeqobybz"
                method="POST"
            >

                {/* <!-- add your custom form HTML here --> */}
                <div className="inputBox col-sm-12">
                    <input type="email" name="email" required="required"/>
                    <span className="text">Your Email</span>
                    <spna className="line"></spna>
                </div>
                
                <div className="textarea col-sm-12">
                    <textarea name="message" required="required"></textarea>
                    <span className="text">Your Message Here...</span>
                    <spna className="line"></spna>
                </div>

                {status === "SUCCESS" ? <p>Thanks!</p> : <button>Send <i className="fas fa-envelope"></i></button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
        </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}