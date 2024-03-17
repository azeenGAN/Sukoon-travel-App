import React from 'react';

import './FAQs.css'

const Default = (props) => {


    function traveldownload() {
        window.open('/Running-Late.pdf');
    }


    const k = Object.entries(props.FAQsQA)

    const acrdnheader1 = () => {
        return (<div>{k[0][0]}</div>);
    };
    const acrdnheader2 = () => {
        return (<div>{k[1][0]}</div>);
    };
    const acrdnheader3 = () => {
        return (<div>{k[2][0]}</div>);
    };
    const acrdnheader4 = () => {
        return (<div>{k[3][0]}</div>);
    };
    const acrdnheader5 = () => {
        return (<div>{k[4][0]}</div>);
    };
    const acrdnheader6 = () => {
        return (<div>{k[5][0]}</div>);
    };
    const acrdnheader7 = () => {
        return (<div>{k[6][0]}</div>);
    };
    const acrdnheader8 = () => {
        return (<div>{k[7][0]}</div>);
    };
    const acrdnheader9 = () => {
        return (<div>{k[8][0]}</div>);
    };
    const acrdnheader10 = () => {
        return (<div>{k[9][0]}</div>);
    };
    const acrdnContent1 = () => {
        return (<div>{k[0][1]}</div>);
    };
    const acrdnContent2 = () => {
        return (<div>{k[1][1]}</div>);
    };
    const acrdnContent3 = () => {
        return (<div>{k[2][1]}</div>);
    };
    const acrdnContent4 = () => {
        return (<div>{k[3][1]}</div>);
    };
    const acrdnContent5 = () => {
        return (<div>{k[4][1]}</div>);
    };
    const acrdnContent6 = () => {
        return (<div>{k[5][1]}</div>);
    };
    const acrdnContent7 = () => {
        return (<div>{k[6][1]}</div>);
    };
    const acrdnContent8 = () => {
        return (<div>{k[7][1]}</div>);
    };
    const acrdnContent9 = () => {
        return (<div>{k[8][1]}</div>);
    };
    const acrdnContent10 = () => {
        return (<div>{k[9][1]}</div>);
    };

    // Initialize and add the map

    // Initialize and add the map





    return (
        <>
            <div className="bannar">

                <img style={{ height: "20vh", width: "100%", objectFit: "cover", objectPosition: "center" }} src={require('../images/FAQbanner.jpg')} alt="aaa" />
            </div>
            <div style={{ padding: "30px" }} className="blankspace"></div>
            <div style={{ margin: "15px", padding: "15px", backgroundColor: "#d4d4d4" }} className="faqmain">
                <div style={{ fontSize: "50px" }} className="heading">FAQs</div>
                <code>Have query/confusion about us, Our process, Payment method, Refunds, Alaska trip , authenticity of our agents. Dont worry we have got you covered.  </code>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", gap: "30px", }} className="midpart">
                    <div class="accordion custom-accordion" id="custom-accordion-one">


                        <div class="card mb-0">
                            <div class="card-header" id="headingOne">
                                <h5 class="m-0">
                                    <a class="custom-accordion-title d-block"
                                        data-bs-toggle="collapse" href="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        {acrdnheader1()}<i
                                            class="mdi mdi-chevron-down accordion-arrow"></i>
                                    </a>
                                </h5>
                            </div>
                            <div id="collapseOne" class="collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#custom-accordion-one">
                                <div class="card-body">
                                    {acrdnContent1()}
                                </div>
                            </div>
                        </div>


                        <div class="card mb-0">
                            <div class="card-header" id="headingTwo">
                                <h5 class="m-0">
                                    <a class="custom-accordion-title collapsed d-block"
                                        data-bs-toggle="collapse" href="#collapseTwo"
                                        aria-expanded="false" aria-controls="collapseTwo">
                                        {acrdnheader2()}<i
                                            class="mdi mdi-chevron-down accordion-arrow"></i>
                                    </a>
                                </h5>
                            </div>
                            <div id="collapseTwo" class="collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#custom-accordion-one">
                                <div class="card-body">
                                    {acrdnContent2()}
                                </div>
                            </div>
                        </div>


                        <div class="card mb-0">
                            <div class="card-header" id="headingThree">
                                <h5 class="m-0">
                                    <a class="custom-accordion-title collapsed d-block"
                                        data-bs-toggle="collapse" href="#collapseThree"
                                        aria-expanded="false" aria-controls="collapseThree">
                                        {acrdnheader3()}<i
                                            class="mdi mdi-chevron-down accordion-arrow"></i>
                                    </a>
                                </h5>
                            </div>
                            <div id="collapseThree" class="collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#custom-accordion-one">
                                <div class="card-body">
                                    {acrdnContent3()}
                                </div>
                            </div>
                        </div>


                        <div class="card mb-0">
                            <div class="card-header" id="headingFour">
                                <h5 class="m-0">
                                    <a class="custom-accordion-title collapsed d-block"
                                        data-bs-toggle="collapse" href="#collapseFour"
                                        aria-expanded="false" aria-controls="collapseFour">
                                        {acrdnheader4()}<i
                                            class="mdi mdi-chevron-down accordion-arrow"></i>
                                    </a>
                                </h5>
                            </div>
                            <div id="collapseFour" class="collapse"
                                aria-labelledby="headingFour"
                                data-bs-parent="#custom-accordion-one">
                                <div class="card-body">
                                    {acrdnContent4()}
                                </div>
                            </div>
                        </div>


                        <div class="card mb-0">
                            <div class="card-header" id="headingFive">
                                <h5 class="m-0">
                                    <a class="custom-accordion-title collapsed d-block"
                                        data-bs-toggle="collapse" href="#collapseFive"
                                        aria-expanded="false" aria-controls="collapseFive">
                                        {acrdnheader5()}<i
                                            class="mdi mdi-chevron-down accordion-arrow"></i>
                                    </a>
                                </h5>
                            </div>
                            <div id="collapseFive" class="collapse"
                                aria-labelledby="headingFive"
                                data-bs-parent="#custom-accordion-one">
                                <div class="card-body">
                                    {acrdnContent5()}
                                </div>
                            </div>
                        </div>


                        <div class="card mb-0">
                            <div class="card-header" id="headingSix">
                                <h5 class="m-0">
                                    <a class="custom-accordion-title collapsed d-block"
                                        data-bs-toggle="collapse" href="#collapseSix"
                                        aria-expanded="false" aria-controls="collapseSix">
                                        {acrdnheader6()}<i
                                            class="mdi mdi-chevron-down accordion-arrow"></i>
                                    </a>
                                </h5>
                            </div>
                            <div id="collapseSix" class="collapse"
                                aria-labelledby="headingSix"
                                data-bs-parent="#custom-accordion-one">
                                <div class="card-body">
                                    {acrdnContent6()}
                                </div>
                            </div>
                        </div>


                        <div class="card mb-0">
                            <div class="card-header" id="headingSeven">
                                <h5 class="m-0">
                                    <a class="custom-accordion-title collapsed d-block"
                                        data-bs-toggle="collapse" href="#collapseSeven"
                                        aria-expanded="false" aria-controls="collapseSeven">
                                        {acrdnheader7()}<i
                                            class="mdi mdi-chevron-down accordion-arrow"></i>
                                    </a>
                                </h5>
                            </div>
                            <div id="collapseSeven" class="collapse"
                                aria-labelledby="headingSeven"
                                data-bs-parent="#custom-accordion-one">
                                <div class="card-body">
                                    {acrdnContent7()}
                                </div>
                            </div>
                        </div>


                        <div class="card mb-0">
                            <div class="card-header" id="headingEight">
                                <h5 class="m-0">
                                    <a class="custom-accordion-title collapsed d-block"
                                        data-bs-toggle="collapse" href="#collapseEight"
                                        aria-expanded="false" aria-controls="collapseEight">
                                        {acrdnheader8()}<i
                                            class="mdi mdi-chevron-down accordion-arrow"></i>
                                    </a>
                                </h5>
                            </div>
                            <div id="collapseEight" class="collapse"
                                aria-labelledby="headingEight"
                                data-bs-parent="#custom-accordion-one">
                                <div class="card-body">
                                    {acrdnContent8()}
                                </div>
                            </div>
                        </div>


                        <div class="card mb-0">
                            <div class="card-header" id="headingNine">
                                <h5 class="m-0">
                                    <a class="custom-accordion-title collapsed d-block"
                                        data-bs-toggle="collapse" href="#collapseNine"
                                        aria-expanded="false" aria-controls="collapseNine">
                                        {acrdnheader9()}<i
                                            class="mdi mdi-chevron-down accordion-arrow"></i>
                                    </a>
                                </h5>
                            </div>
                            <div id="collapseNine" class="collapse"
                                aria-labelledby="headingNine"
                                data-bs-parent="#custom-accordion-one">
                                <div class="card-body">
                                    {acrdnContent9()}
                                </div>
                            </div>
                        </div>
                        <div class="card mb-0">
                            <div class="card-header" id="headingTen">
                                <h5 class="m-0">
                                    <a class="custom-accordion-title collapsed d-block"
                                        data-bs-toggle="collapse" href="#collapseTen"
                                        aria-expanded="false" aria-controls="collapseTen">
                                        {acrdnheader10()}<i
                                            class="mdi mdi-chevron-down accordion-arrow"></i>
                                    </a>
                                </h5>
                            </div>
                            <div id="collapseTen" class="collapse"
                                aria-labelledby="headingTen"
                                data-bs-parent="#custom-accordion-one">
                                <div class="card-body">
                                    {acrdnContent10()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nycimg">
                        <figure style={{ textAlign: "center" }}>
                            <img style={{ objectFit: "fill", width: "90%" }} src={require("../images/33757a187301263.658553094a4cc.jpg")} alt='Book with us' />
                            <figcaption><code>Book your Tour with us.</code></figcaption>
                        </figure>
                    </div>
                </div>

                <code>If you still have any query read our travel Guide by Clicking <span onClick={traveldownload} className='pdfdownload'>here</span> </code>

            </div>
        </>

    );
};
export default Default;