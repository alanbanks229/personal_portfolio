
import React, { useState } from 'react'
import './contact.css'

function Contact() {
    
    
    const [ email, setEmail ] = useState('email@example.com')
    const [ name, setName ] = useState('Name')
    const [ subject, setSubject ] = useState('')
    const [ content, setContent ] = useState('')
    function handleEmailChange(event){
        setEmail(event.target.value)
    }
    function handleNameChange(event){
        setName(event.target.value)
    }
    function handleSubjectChange(event){
        setSubject(event.target.value)
    }
    function handleContentChange(event){
        setContent(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        const templateId = 'template_wVvPbJ5s'
        sendFeedback(templateId, {message_html: content, from_name: name, reply_to: email, subject: subject})
    }

    function sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            alert('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }


    return (
        <>
        <div id="small_contact_div">
            <article class="post">
                <h2 className="contact_header">Feel free to use your default email to get in contact</h2>
                <p>In fact I would rather have you email me via your default email... but if you so desire, feel free to send me an email via the form below :)</p>
            </article>
        </div>
        <footer id="footer">
        <section>
            <form className="test-mailing">
                <div className="fields">
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input onChange={handleEmailChange} type="text" name="email" id="email" placeholder="baby_yoda@force.com"/>
                    </div>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input onChange={handleNameChange} type="text" name="name" id="name" placeholder="Yoda"/>
                    </div>
                    <div className="field">
                        <label htmlFor="subject">Subject</label>
                        <input onChange={handleSubjectChange} type="text" name="subject" id="subject" placeholder="I sense a disturbance in the force" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea onChange={handleContentChange} name="message" id="message" rows="3" placeholder="Do or Do not, there is no try"></textarea>
                    </div>
                </div>
                <ul className="actions">
                    <li><input type="submit" value="Send Message" onClick={handleSubmit} /></li>
                    <li className="float_right_power_by"> powered by: <br/> <b>emailjs</b></li>
                </ul>
            </form>
        </section>
        <section class="split contact">
            <section class="alt">
                <h3>Address</h3>
                <p>8732 Falls Chapel Way<br />
                Potomac, MD 20854</p>
            </section>
            <section>
                <h3>Phone</h3>
                <p>(301) 661-0363</p>
            </section>
            <section>
                <h3>Email</h3>
                <p>alanbanks229@gmail.com</p>
            </section>
            <section>
                <h3>Social</h3>
                <ul class="icons alt">
                    <li><a href="#" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
                    <li><a href="#" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
                    <li><a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
                    <li><a href="#" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
                </ul>
            </section>
        </section>
    </footer>
    </>
    )
}

export default Contact