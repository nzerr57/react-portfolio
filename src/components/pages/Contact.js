import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <>
      <h1>Contact Page</h1>
      <div className="container">
      <form>
      <div className="form-group m-5">
        <label for="exampleInputEmail1">Name</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group m-5">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="form-group m-5">
    <label for="message">Message</label>
    <textarea className="form-control" id="message" rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    </>
  );
}
