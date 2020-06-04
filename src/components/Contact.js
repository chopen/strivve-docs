import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">

                    <input type="hidden" name="bot-field" />

                    <div className="field half first">
                        <label htmlFor="name">
                        <input type="text" name="name" id="name" required/>Name</label>
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" required/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" required></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Request" className="special" /></li>
                    </ul>
                </form>
            </section>
        </div>
    </section>
)

export default Contact