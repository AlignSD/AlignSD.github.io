import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../style.css"


function ContactPage() {
    return (
        <div className="vertical-center justify-content-center align-items-start">
            <div className="container">
                <span className="larger border-bottom mb-4 d-flex justify-content-center align-items-center contact-me">Contact Me</span>
                    <div className="container">
                        <div className="form-group row">
                            <label for="colFormLabelsm" className="col-sm-2 col-form-label col-form-label-lg">Name</label>
                                <div className="col-sm-10">
                                    <input type="Name" className="form-control form-control-lg" id="colFormLabelLg" placeholder="Your Name" />
                                </div>
                        </div>
                        <div className="form-group row">
                            <label for="colFormLabelsm" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                <div className="col-sm-10">
                                    <input type="Email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="Your Email" />
                                </div>
                        </div>
                        <div className="form-group row">
                            <label for="exampleFormControlTextarea1" className="col-sm-2 col-form-label col-form-label-lg">Message</label>
                                <div className="col-sm-12">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">Your Message Here</textarea>
                                </div>
                                <button type="submit" className="btn btn-secondary p-3 mt-3 mx-auto">Send</button>   
                        </div>
                    </div>  
            </div> 
        </div>
    );
}

export default ContactPage;