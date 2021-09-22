import React, {Fragment, useState, useEffect} from 'react';
 import { Formik, Form, Field, ErrorMessage , useField} from 'formik';
 import * as Yup from 'yup';
 import axios from 'axios';


  const ContactSchema = Yup.object().shape({
   name: Yup.string().required('Name is required'),
   subject: Yup.string().required('Subject is required'),
   email: Yup.string().email('Invalid email').required('Email is required'),
   comments: Yup.string().required('Comments is required'),
 });


const TextArea = ({label, ...props}) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
      <Fragment>
          <textarea className="text-area" {...field} {...props} />
          {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
          ) : null}
      </Fragment>
  );
};

const Contact = props => {

   const [submitted, setSubmitted] = useState(false);
   const [submitError, setSubmitError] = useState(false);

   const handleFormSubmit = values => {
      axios({
         method: 'post',
         url: `sendmail.php`,
         headers: { 'content-type': 'application/json' },
         data: values
      })
         .then(result => {
            setSubmitted(true);
            setSubmitError(false)
         })
         .catch(error =>  {
            setSubmitted(false);
            setSubmitError(true) 
         });
   };
    return (
        <section id="contact" class="contact section-bg ">
            <div class="container">
               <div class="section-title">
                  <h2>DISCUSSION FORUM</h2>
                  <p>In case of any query feel free to reach us at any of our social media handles, you can find links to those on the left. A discussion forum for all defence aspirants is under development where you can discuss over different topics related to selection in the forces with other aspirants and get your answers. </p>
               </div>
               <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
               <Formik
               initialValues={{
                  name: "",
                  subject: "",
                  email: "",
                  message: ""
               }}
               validationSchema={Yup.object({
                  name: Yup.string()
                     .required("Name is required"),
                  subject: Yup.string()
                     .required("Subject is required"),
                  email: Yup.string()
                     .email("Invalid email addresss")
                     .required("Email is required"),
               })}
               onSubmit={(values, { setSubmitting }) => {
                     setSubmitting(false);
                     handleFormSubmit(values);
               }}
               >
                  <Form class="php-email-form">
                     <div class="form-row">
                        <div class="form-group col-md-6">
                           <label for="name">Your Name</label>
                           <Field name="name" className="form-control"/>
                           <ErrorMessage name="name" component="span" className="error" />
                        </div>
                        <div class="form-group col-md-6">
                           <label for="email">Your Email</label>
                           <Field name="email" className="form-control"/>
                           <ErrorMessage name="email" component="span" className="error" />
                        </div>
                     </div>
                     <div class="form-group">
                        <label for="subject">Subject</label>
                        <Field name="subject" className="form-control"/>
                        <ErrorMessage name="subject"  component="span" className="error"/>
                     </div>
                     <div class="form-group">
                        <label for="message">Message</label>
                        <TextArea class="form-control" name="message" rows="6"/>
                     </div>
                     <div class="mb-3">
                        <div class="loading">Loading</div>
                     </div>
                     <button type="submit">Send Message</button>
                     <div>{submitted && "Form Submitted, Thank you"}</div>
                     <div>{submitError && "Something went wrong, Try Again"}</div>
                  </Form>
                  </Formik>
               </div>
            </div>
         </section>
    );
};

Contact.propTypes = {
    
};

export default Contact;