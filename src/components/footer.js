import React from 'react'
import Apple from '../img/app-store.svg'
import Google from '../img/google-play.png'
import '../css/footer.css'
import PoweredImg from '../img/poweredByFoursquare.png'

export const FooterDownload = ()=> {
    return(
        <div className="footer">
            <div className="download">
                <img src={Apple} alt="apple-store" className="googleImg"/>
                <img src={Google} alt="google-play" className="googleImg"/>
            </div>

            <div className="footer-about">
                <span className="footer-element">
                    <a href="http://twitter.com/WainNakel" target="_blank">
                    <i className="fa fa-twitter"></i> @WainNakel</a>
                </span>
                <span className="seperator">|</span>
                <span className="footer-element">2018 © جميع الحقوق محفوظة</span>
                <span className="seperator">|</span>

                <span className="footer-element">
                    <a href="http://wainnakel.com/privacy">Privacy Policy</a>
                </span>
            </div>

            <div className="footer-poweredBy">
                <img src={PoweredImg} className="powerdBy"/>
            </div>
        </div>
    )
}