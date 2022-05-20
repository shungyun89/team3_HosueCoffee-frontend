import React from 'react';
import '../styleCheckout.scss';
import CheckButton from '../component/CheckButton';


const Promo = () => (


        
    <div  className="listBody">
        <div  className="Promo">
            <div  className="PromoBody">
                <p>優惠碼使用</p>
                <CheckButton/>
            </div>
        </div>
        <div  className="Promo">
            <div  className="PromoBody">
                <p>紅利點數使用</p>
                <div  className="d-flex">
                    <p>可折扣點數:</p>
                    <p style={{color: 'red'}}>00</p>
                    <p>/</p>
                    <p>30點</p>
                </div>
                <CheckButton/>
            </div>
        </div>
    </div>





)


export default Promo