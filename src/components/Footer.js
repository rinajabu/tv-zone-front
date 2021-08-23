import React from 'react'

const Footer = (props) => {
    return (
        <div className="footer-container">
            <h5>Created By: </h5>
            <div className="our-social-sections-container">
                <div className="our-social-sections">
                    <h6 className="footer-text">Haley Hicks</h6>
                    <div className="logos-container">
                        <a href="https://github.com/haleyhicks90" target="_blank"><img class="social-logo" src="https://image.flaticon.com/icons/png/512/38/38401.png" alt="Github logo"/></a>
                        <a href="https://www.linkedin.com/in/haleyhicks90" target="_blank"><img class="social-logo" src="https://image.flaticon.com/icons/png/512/61/61109.png" alt="LinkedIn logo"/></a>
                    </div>
                </div>
                <div className="our-social-sections">
                    <h6 className="footer-text">Kyle Castillo</h6>
                    <div className="logos-container">
                        <a href="https://github.com/kcastillo90?tab=repositories" target="_blank"><img class="social-logo" src="https://image.flaticon.com/icons/png/512/38/38401.png" alt="Github logo"/></a>
                        <a href="http://www.linkedin.com/in/kyle-castillo" target="_blank"><img class="social-logo" src="https://image.flaticon.com/icons/png/512/61/61109.png" alt="LinkedIn logo"/></a>
                    </div>
                </div>
                <div className="our-social-sections">
                    <h6 className="footer-text">Rina Joy Abu</h6>
                    <div className="logos-container">
                        <a href="https://github.com/rinajabu?tab=repositories" target="_blank"><img class="social-logo" src="https://image.flaticon.com/icons/png/512/38/38401.png" alt="Github logo"/></a>
                        <a href="https://www.linkedin.com/in/rinajoyabu" target="_blank"><img class="social-logo" src="https://image.flaticon.com/icons/png/512/61/61109.png" alt="LinkedIn logo"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer