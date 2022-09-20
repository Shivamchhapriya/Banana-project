import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

class FirstPage extends Component {
    render() { 
        return (
            <>
                <div className="firstImg">
                        <div className="row">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-10 mx-5 p-5 mt-5">
                            <p className="text-white  fw-bold w-75 fs-3 mt-5  mx-5">Banano is a feeless, instant, rich in potassium cryptocurrency powered by DAG technology disrupting the meme economy.</p>
                            <button className="getBananobtn fw-bold fs-5 mt-2 rounded-3" style={{marginLeft:'30%'}}>Get Banano</button>
                            </div>
                            <div className="col-lg-1"></div>

                        </div>
                    {/* <img src="https://banano.cc/illustrations/backgrounds/bg-footer.svg" alt="" /> */}
                    <svg class="absolute left-0 w-[300%] md:left-auto md:w-[200%] lg:w-[150%] xl:w-[100%] h-auto bottom-0" style={{marginTop:'20%'}}  viewBox="0 0 1024 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0C30 12 66.2465 22 131 22C196 22 235 5 297 5C359 5 445 29 511 29C577 29 624 6 693 6C762 6 821 26 886 26C951 26 991 10 1024 0V40H0V0Z" fill="white"></path></svg>
                    
                </div>

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> key feature >>>>>>>>>>>>>>>>>>>>>>>>> */}

                <div>
                    <p className="text-center mt-5 fs-1 fw-bold">Key Features</p>
                    <p className="text-center font-weight-normal  fs-5" style={{marginLeft:"25%",width:"53%",}}>Banano is a 4th generation fungible & edible cryptocurrency with a cool yellow logo. Our team is top-notch and the project advisors are by a moonshot best in the business.</p>
                    <div className="row justify-content-center mt-5 p-5">
                        {/* <div className="col-lg-1"></div> */}
                        <div className="col-lg-2 col-6">
                            <img src="Images/shitcoin.svg" alt="" />
                            <p  className="text-center mt-2">THE BLOCK-LETTUCE™ DAG ARCHITECTURE</p>
                        </div>
                        <div className="col-lg-2 col-6">
                        <img src="Images/trees.svg" alt="" />
                        <p  className="text-center mt-2">INSTANT AND FEELESS TRANSACTIONS</p>

                        </div>
                        <div className="col-lg-2 col-6">
                        <img src="Images/units.svg" alt="" />
                        <p  className="text-center mt-2">FUNGIBLE & EDIBLE</p>

                        </div>
                        <div className="col-lg-2 col-6">
                        <img src="Images/shitcoin.svg" alt="" />
                            <p  className="text-center mt-2">DAILY POTASSIUM AIRDROPS</p>
                        </div>

                        {/* <div className="col-lg-1"></div> */}


                    </div>


                    <div className="row justify-content-center text-center p-5">
                        {/* <div className="col-lg-1"></div> */}
                        <div className="col-lg-2 col-6">
                            <img src="Images/shitcoin.svg" alt="" />
                            <p className="text-center mt-2">RIPE FOR MEMES</p>
                        </div>
                        <div className="col-lg-2 col-6">
                        <img src="Images/trees.svg" alt="" />
                            <p  className="text-center mt-2">LITERALLY GROWS ON TREES, NO MINING REQUIRED</p>
                        </div>
                        <div className="col-lg-2 col-6">
                        <img src="Images/units.svg" alt="" />
                            <p  className="text-center mt-2">NOT A SHITCOIN (UNTIL DIGESTED)</p>
                        </div>
                        <div className="col-lg-2 col-6">
                        <img src="Images/shitcoin.svg" alt="" />
                            <p  className="text-center mt-2">NO MORE CONFUSING UNITS, 1 BANANO = 100 BANOSHI</p>
                        </div>

                        {/* <div className="col-lg-1"></div> */}


                    </div>
                    
                </div>


                {/* ================================ Get Banano ===================== */}
                <div className="" style={{backgroundColor:"#3A9139", padding:"2%"}}>
                    <div className="text-center text-white">
                        <p className="h1 fw-bold  text-white">Get Banano</p>
                        <p className="fw-blod fs-3" style={{padding:"2% 30%"}}>First, be sure to join our Discord, Reddit & Telegram. Then you can participate in random airdrops, monkey around with random tips/rains. We also do giveaways on Twitter, real ones. No need to send us any Ethereum.</p>
                    </div>
                </div> 

                <div className="">
                    <img src="Images/circle.png" alt="" className="mt-5 rotate" width="100px" height="100px" /> 
                </div>     
            </>
        );
    }
}
 
export default FirstPage;