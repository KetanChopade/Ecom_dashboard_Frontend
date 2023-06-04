import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop,faHashtag,faVrCardboard,faHeart,faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const Footers = () => {
  return (
    <div>
    <div className="footer">
    <div className="container">     
        <div className="row">                       
            <div className="col-lg-4 col-sm-4 col-xs-12">
                <div className="single_footer">
                    <h4>
                    
                    Services</h4>
                    <ul>
                        <li><Link to="#">Lorem Ipsum</Link></li>
                        <li><Link to="#">Simply dummy text</Link></li>
                        <li><Link to="#">The printing and typesetting </Link></li>
                        <li><Link to="#">Standard dummy text</Link></li>
                        <li><Link to="#">Type specimen book</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single_footer single_footer_address">
                    <h4>Page Link</h4>
                    <ul>
                        <li><Link to="#">Lorem Ipsum</Link></li>
                        <li><Link to="#">Simply dummy text</Link></li>
                        <li><Link to="#">The printing and typesetting </Link></li>
                        <li><Link to="#">Standard dummy text</Link></li>
                        <li><Link to="#">Type specimen book</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single_footer single_footer_address">
                    <h4>Subscribe today</h4>
                    <div className="signup_form">                           
                        <form action="#" className="subscribe">
                            <input type="text" className="subscribe__input" placeholder="Enter Email Address"/>
                            <button type="button" className="subscribe__btn"><FontAwesomeIcon icon={faPaperPlane} /></button>
                        </form>
                    </div>
                </div>
                <div className="social_profile">
                    <ul>
                        <li><Link to="#"><FontAwesomeIcon icon={faLaptop} /></Link></li>
                        <li><Link to="#"><FontAwesomeIcon icon={faHashtag} /></Link></li>
                        <li><Link to="#"><FontAwesomeIcon icon={faVrCardboard} /></Link></li>
                        <li><Link to="#"><FontAwesomeIcon icon={faHeart} /></Link></li>
                    </ul>
                </div>                          
            </div>   
        </div>
        <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
                <p className="copyright">Copyright © 2023 <Link to="/"><span className='text-white'>ketan</span></Link>.</p>
            </div>         
        </div>            
    </div>
</div>
</div>
  )
}

export default Footers