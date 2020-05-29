import React from 'react'

export default function contact() {
    return (
        <footer id="footer">
        <section>
            <form method="post" action="#">
                <div class="fields">
                    <div class="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Yoda"/>
                    </div>
                    <div class="field">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" placeholder="baby_yoda@force.com"/>
                    </div>
                    <div class="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="3" placeholder="Do or Do not, there is no try"></textarea>
                    </div>
                </div>
                <ul class="actions">
                    <li><input type="submit" value="Send Message" /></li>
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
    )
}
