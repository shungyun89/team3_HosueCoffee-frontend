import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { useState } from 'react';
import MemberAside from "./memberAside";
import MemberBack from './memberBack';
import './memberPassword.css'

function MemberPassword(props){
  const{auth}=props;
    const {dataCheck}=props;
    if(!auth){
      window.location.replace("https://hosue-coffee-backend.herokuapp.com/member")
    }if(!dataCheck){
      window.location.replace("https://hosue-coffee-backend.herokuapp.com/member/NewData");
    }
  const account=localStorage.getItem("account");
  const [member_photo,setmember_photo]=useState(localStorage.getItem("photo"))
    if(member_photo==""){
        setmember_photo("housecoffee.png")
      }
  const [member_password, setmember_password] = useState("");
  const [member_passwordN, setmember_passwordN] = useState("");
  const [member_passwordN2, setmember_passwordN2] = useState("");
  const [passwordMessage, setpasswordMessage] = useState("");
  const [passwordMessageN, setpasswordMessageN] = useState("");
  const [passwordMessageN2, setpasswordMessageN2] = useState("");
  const [oldpassword, setOldpassword] = useState("");
  const thismemberid=localStorage.getItem(true);
  // console.log(thismemberid);

  const handleValueChange=(e)=>{
    setmember_password(e.target.value);
  }
  const handleValueChangeN=(e)=>{
    setmember_passwordN(e.target.value);
  }
  const handleValueChangeN2=(e)=>{
    setmember_passwordN2(e.target.value);
  }
 
  const handleCheckPassword=async ()=>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/account/checkPassword?member_password=${member_password}&member_id=${thismemberid}`);
    console.log(process.env.REACT_APP_API_URL);
    const results = await response.json();
    if(results.total === 1){
      const getoldPWord = await fetch(`${process.env.REACT_APP_API_URL}/account//getoldPassword?member_password=${member_password}&member_id=${thismemberid}`);
      console.log(process.env.REACT_APP_API_URL);
      const oldPW = await getoldPWord.json();
      setpasswordMessage("???????????????");
      document.querySelector('.passwordMessageRed').style.color="#4C3410"
      document.querySelector('.passwordMessageRed_m').style.color="#4C3410"
      setOldpassword(oldPW.member_password);
    }else{
      setpasswordMessage("???????????????");
      setOldpassword('');
    }
  }
  const password_re =/^(?=.*[0-9\!@#\$%\^&amp;\*])(?=.*[a-zA-Z]).{8,20}$/; 
  //??????????????????
  const handleCheckPasswordN=()=>{
    if(member_passwordN && password_re.test(member_passwordN)&& member_passwordN!=oldpassword){
      setpasswordMessageN("????????????")
      document.querySelector('.passwordMessageRedN').style.color="#4C3410"
      document.querySelector('.passwordMessageRedN_m').style.color="#4C3410"
    }else if(member_passwordN==oldpassword){
      setpasswordMessageN("????????????????????????")
    }else{
      setpasswordMessageN("??????????????????8~20?????????")
      setmember_passwordN2("")
    }

  }
  const handleCheckPasswordN2=()=>{
    if(member_passwordN==member_passwordN2){
      setpasswordMessageN2("?????????????????????");
      document.querySelector('.passwordMessageRedN2').style.color="#4C3410"
      document.querySelector('.passwordMessageRedN2_m').style.color="#4C3410"
    }else{
      if(member_passwordN==member_passwordN2 && member_passwordN2!=""&& member_passwordN==oldpassword){
        setpasswordMessageN2("???????????????????????????????????????????????????");
  
      }else{
      setpasswordMessageN2("?????????????????????");
      
    }
  }
}
  const changPW=async ()=>{
    if(passwordMessage=='???????????????' && passwordMessageN=="????????????" && passwordMessageN2=="?????????????????????"){
    const response = await fetch(`${process.env.REACT_APP_API_URL}/account/changePassword?member_password=${member_passwordN}&member_id=${thismemberid}`);
    // const results = await response.json();
    // console.log(results);
    alert('????????????');
    window.location.replace("https://hosue-coffee-backend.herokuapp.com/member/profile");
  }else{
    if(passwordMessage != '???????????????'){
      document.querySelector('.passwordMessageRed').style.color="red"
      document.querySelector('.passwordMessageRed_m').style.color="red"
    }
    if(passwordMessageN != '????????????'){
      document.querySelector('.passwordMessageRedN').style.color="red"
      document.querySelector('.passwordMessageRedN_m').style.color="red"
    }
    if(passwordMessageN2 != '?????????????????????'){
      document.querySelector('.passwordMessageRedN2').style.color="red"
      document.querySelector('.passwordMessageRedN2_m').style.color="red"
    }
  }
}
  
    return(
        <>
        
          <MemberBack/>

    
    <div className="container">
      <div className="row">
        <MemberAside/>
        <main className="mMain row col">
                
                <div className="col-4 col-3None">
                    <div className="proList">
                        <div className="memberPhoto"><img  src={`${process.env.REACT_APP_API_URL}/uploads/${member_photo}`}  alt="????????????"></img></div>
                        <div className="memberNumber">
                            <div >????????????</div>
                            <div >{account}</div>
                        </div>
                    </div>
                </div>
                <div className="col proR">
                    <div className="proMain">
                        <div className="proList_m">
                            <div className="memberPhoto"><img  src={`${process.env.REACT_APP_API_URL}/uploads/${member_photo}`}  alt="????????????"></img></div>
                            
                            <div className="memberNumber">
                                <div >{account}</div>
                            </div>
                        </div>
                        <div>
                            <div className="col-3None">

                              <div className="proRight_pw">?????????:&emsp;&emsp;&emsp;&emsp;
                                    <input type="password" value={member_password} onChange={handleValueChange} onBlur={handleCheckPassword}></input>
                              </div>
                              <div className='passwordMessageRed'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{passwordMessage || "??????????????????"}</div>
                              
                              <div className='newpassword'>  
                              <div className="proRight_pw" >?????????:&emsp;&emsp;&emsp;&emsp;
                                    <input type="password" value={member_passwordN} onChange={handleValueChangeN} onBlur={handleCheckPasswordN}  maxLength={20} minLength={8}></input>
                              </div>
                              <div className='passwordMessageRedN'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{passwordMessageN || "??????????????????8~20?????????"}</div>
                              
                              <div className="proRight_pw newpassword2">???????????????:&emsp;&emsp;
                                    <input type="password"  value={member_passwordN2} onChange={handleValueChangeN2}  onBlur={handleCheckPasswordN2} maxLength={20} minLength={8}></input>  
                              </div>
                               <div className='passwordMessageRedN2' >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{passwordMessageN2 || "????????????????????????"}</div>
                               <br></br>
                               <div></div>
                              <button type='button' className="memberEdit memberEditP memberEdit-w" onClick={changPW}>????????????</button>
                              </div>
                            </div>

                              <div className="col-wn">
                                <from>
                                    <div className="proRight">
                                      <div>?????????:</div>
                                      <input type="password" value={member_password} onChange={handleValueChange} onBlur={handleCheckPassword}></input>
                                      <div className='passwordMessageRed passwordMessageRed_m'>{passwordMessage || "???????????????"}</div>
                                      <br></br>
                                    </div>
                                    <div className='newpassword'> 
                                    <div className="proRight">
                                      <div>?????????:</div>
                                      <input type="password" value={member_passwordN} onChange={handleValueChangeN} onBlur={handleCheckPasswordN}  maxLength={20} minLength={8}></input>
                                      <div className='passwordMessageRedN passwordMessageRedN_m'>{passwordMessageN || "??????????????????8~20?????????"}</div>
                                      <br></br>
                                    </div>

                                    <div className="proRight">
                                      <div>???????????????:</div>
                                      <input type="password" value={member_passwordN2} onChange={handleValueChangeN2}  onBlur={handleCheckPasswordN2} maxLength={20} minLength={8}></input>
                                      <div className='passwordMessageRedN2 passwordMessageRedN2_m'>{passwordMessageN2 || "????????????????????????"}</div>
                                      <br></br>
                                    </div>
                                    <button  type='button' onClick={changPW} className="memberEdit memberEditP memberEdit-m">??????</button>
                                  </div>
                                  </from>
                               </div>


                          
                      </div>
                        <br></br>
                    </div>
                 

                    
                    
               
                </div>
         
               
        </main>    
        </div>  
    </div>
    <br></br>  
    <br></br> 
        </>
    )
}
export default MemberPassword
