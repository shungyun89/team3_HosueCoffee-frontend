import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './memberLogin.css'
function MemberLogin(){
    const Login = ()=>{
        document.querySelector('.loginMain1').style.right='-491px';
        document.querySelector('.loginMain1').style.transition='0.5s';
        document.querySelector('.LG').style.display="block"
        document.querySelector('.LG-F').style.display="none"
      }
    const SingIn = ()=>{
        document.querySelector('.loginMain1 ').style.right='0px';
        document.querySelector('.loginMain1 ').style.transition='0.5s';
      }
      const fg = ()=>{
        document.querySelector('.LG').style.display="none"
        document.querySelector('.LG-F').style.display="block"
      }
      const fgb = ()=>{
        document.querySelector('.LG').style.display="block"
        document.querySelector('.LG-F').style.display="none"
      }
  
  
  
      const rwdNew = () =>{
        document.querySelector('.loginM').style.display="none"
        document.querySelector('.loginCM').style.display="block"
        document.querySelector('.forget-m').style.display="none"
      }
      const rwdL=()=>{
        document.querySelector('.loginCM').style.display="none"
        document.querySelector('.loginM').style.display="block"
        document.querySelector('.forget-m').style.display="none"
      }
      const fgM=()=>{
        document.querySelector('.loginCM').style.display="none"
        document.querySelector('.loginM').style.display="none"
        document.querySelector('.forget-m').style.display="block"
      }
      const fgMb=()=>{
        document.querySelector('.loginCM').style.display="none"
        document.querySelector('.loginM').style.display="block"
      }

     
  
    return(
        <>
            <div className="pmain">
                <div className="row">
                    <div className="col ">
                        <div className="memberLoginMain">
                            <div className="row">
                                <div className="col loginLift">
                                    <img className="member1" src={require('./img/member_logoin_1.png')} alt=""></img>
                                    <img className="member2" src={require('./img/member_logoin_2.png')} alt=""></img>
                                    <h2 className="liftW1">????????????</h2>
                                    <h2 className="liftW2">??????????????????</h2>
                                </div>
                                <div className="col loginRight">
                                    <div className="row">
                                    <div className="col-6 loginTop loginTopL"> <div className="loginWord lg1" onClick={Login}>LOGIN</div> </div>
                                    <div className="col-6 loginTop loginTopR"> <div className="loginWord lg2" onClick={SingIn}>SIGN IN</div> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row loginMain">
                                <div className="col-6 loginMain1">
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <div className="loginInput loginInputL">
                                        <div className="LG">
                                            <br></br>
                                            <input type="text" size="30" placeholder="&ensp;????????????"></input>
                                            <br></br>
                                            <input type="password" size="30" placeholder="&ensp;????????????"></input>
                                            <div className="row">
                                            <div className="col-3"></div>
                                            <div className="col-4"></div> 
                                            <div id="forget" onClick={fg} className="col-3">?????????????</div>
                                            <div className="col-2"></div>
                                            </div>
                                            <br></br>
                                            <Link to="/member/Profile"><button>&ensp;??????&ensp;</button></Link>
                                            <hr></hr>
                                            <br></br>
                                            <div className="GLoginL"><i className="fa-brands fa-google"></i>&ensp;??????Google??????</div>
                                        </div>
                                        <div className="LG-F">
                                            <input type="email" placeholder="?????????????????????"></input>
                                            <div className="fgBack mLcolor" onClick={fgb}>??????</div>
                                            <button>&ensp;??????&ensp;</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 loginMain2">
                                    <br></br>
                                    <br></br>
                                    <div className="loginInput loginInputR">
                                    <br></br>
                                    <input type="email" size="30" placeholder="&ensp;????????????"></input>
                                    <br></br>
                                    <input type="text" size="30" placeholder="&ensp;????????????"></input>
                                    <br></br>
                                    <input type="password" size="30" placeholder="&ensp;????????????"></input>
                                    <br></br>
                                    <button>&ensp;??????&ensp;</button>
                                    <hr></hr>
                                    <br></br>
                                    <div className="GLoginR"><i className="fa-brands fa-google"></i>&ensp;??????Google??????</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pmain-m">
                <div className="loginM">
                    <div className="MimgDiv">
                    </div>
                    <div className="loginInput loginInputL">
                    <input type="text" size="25" placeholder="&ensp;????????????"></input>
                    <br></br>
                    <input type="password" size="25" placeholder="&ensp;????????????"></input>
                    <br></br>
                    <div className="mLcolor fgaa" onClick={fgM}>????????????</div>
                    <br></br>
                    <Link to="/profile"><button>&ensp;??????&ensp;</button></Link>
                    <div className="loginM-F">
                        <div className="lmLogo"><i className="fa-brands fa-google"></i></div>
                        <div className="lmLogo"><i className="fa-brands fa-facebook-f"></i></div>
                        <div className="newM mLcolor" onClick={rwdNew}>????????????</div>
                    </div>
                    </div>
                </div>  

                <div className="loginCM">
                    <div className="loginInput loginInputL">
                    <input type="text" size="25" placeholder="&ensp;????????????"></input>
                    <br></br>
                    <input type="text" size="25" placeholder="&ensp;????????????"></input>
                    <br></br>
                    <input type="password" size="25" placeholder="&ensp;????????????"></input>
                    <br></br>
                    <button>&ensp;??????&ensp;</button>
                    <div className="loginM-F">
                        <div className="lmLogo"><i className="fa-brands fa-google"></i></div>
                        <div className="lmLogo"><i className="fa-brands fa-facebook-f"></i></div>
                        <br></br>
                        <div className="newL mLcolor" onClick={rwdL}>????????????</div>
                    </div>
                    </div>
                </div> 
                <div className="forget-m loginInput loginInputL">
                    <input type="email" size="25" placeholder="?????????????????????"></input>
                    <div className="mldiv"><div className="fgMBack mLcolor" onClick={fgMb}>??????</div></div>
                    <button>&ensp;??????&ensp;</button>
                </div> 
                </div>
            
        </>
    )
    
    
    

}
export default MemberLogin