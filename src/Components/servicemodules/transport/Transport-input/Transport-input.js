import React,{Component} from 'react';
import './transport-input.css';
import {History} from 'react-router-dom';
import axios from "axios";
import {withRouter} from 'react-router-dom';
import { format } from "date-fns";

class TransportInput extends Component{

    constructor(props) {
        super(props)
        this.state = {

            pickuplocation: '',
            pickupdate: '',
            pickuptime: '',
            dropofflocation: '',
            dropoffdate: '',
            dropofftime: '',
            notravellers: '',
            hidden:'true'

        }

    }


    Changehandler = (event)=>{
        this.setState({ [event.target.name]: event.target.value })
    }

    handlehiddenClik() {
        this.setState( {hidden: !this.state.hidden} )

    }

    handleSubmit = e =>{

        // if (this.state.dropofflocation===null){
        //     this.setState({dropofflocation:this.state.pickuplocation})
        // }
         e.preventDefault();

         console.log(this.state)

        this.props.history.push('/transportproviderlist')
        // axios
        //     .post('http://localhost:5000/TransportProvider/Post', {
        //
        //     })
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })


    }



    render() {

        return (
            <div>
                <br/>

                {/*<form onSubmit={this.handleSubmit}>*/}
                    {/*<div className="container tinput ">*/}
                        {/*<div className="row " style={{padding: "100px"}}>*/}


                            {/*<div className="col-lg-6">*/}
                                {/*<div className="input-group mb-3">*/}
                                    {/*<div className="input-group-prepend">*/}
                                        {/*<span className="input-group-text" id="basic-addon1">Pickup location</span>*/}
                                    {/*</div>*/}
                                    {/*<input type="text"  className="form-control" aria-label="Username"*/}
                                           {/*aria-describedby="basic-addon1"*/}
                                           {/*value={this.state.pickuplocation} onChange={this.Changehandler}*/}
                                           {/*name="pickuplocation"*/}
                                           {/*required*/}
                                    {/*/>*/}

                                {/*</div>*/}
                            {/*</div>*/}



                            {/*<div className="col-lg-4 ">*/}


                                {/*<div className="input-group mb-3">*/}
                                    {/*<div className="input-group-prepend">*/}
                                        {/*<span className="input-group-text">Pickup Date</span>*/}
                                    {/*</div>*/}
                                    {/*<input type="date" name="pickupdate" className="form-control"*/}
                                           {/*value={this.state.pickupdate} onChange={this.Changehandler}*/}
                                    {/*/>*/}

                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-2">*/}
                                {/*<div className="input-group mb-3">*/}

                                    {/*<input type="time" name="pickuptime" className="form-control"*/}
                                           {/*value={this.state.pickuptime} onChange={this.Changehandler}*/}
                                    {/*/>*/}

                                {/*</div>*/}
                            {/*</div>*/}


                            {/*<div className="col-lg-6 input-group mb-3">*/}

                                {/*<div className="form-check form-check-inline ">*/}
                                    {/*<input className="form-check-input" type="checkbox" id="inlineCheckbox1"*/}
                                           {/*value="true" name=" checkboxval"   onClick = {this.handlehiddenClik.bind(this)} />*/}
                                    {/*<div className="input-group-prepend">*/}
                                        {/*<span className="input-group-text">Return  to the same location</span>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-6"></div>*/}

                                {/*<div className="col-lg-6">*/}
                                {/*<div className="input-group mb-3" hidden = {(!this.state.hidden)? "hidden" : ""}>*/}
                                    {/*<div className="input-group-prepend">*/}
                                        {/*<span className="input-group-text" id="basic-addon1">Drop off location</span>*/}
                                    {/*</div>*/}
                                    {/*<input type="text"  className="form-control" aria-label="Username"*/}
                                           {/*aria-describedby="basic-addon1"*/}
                                           {/*value={this.state.dropofflocation} onChange={this.Changehandler}*/}
                                           {/*name="dropofflocation"*/}
                                    {/*/>*/}

                                {/*</div>*/}
                            {/*</div>*/}



                            {/*<div className="col-lg-4">*/}
                                {/*<div className="input-group mb-3" >*/}
                                    {/*<div className="input-group-prepend">*/}
                                        {/*<span className="input-group-text">Drop Off Date</span>*/}
                                    {/*</div>*/}
                                    {/*<input type="date" name="dropoffdate" className="form-control"*/}
                                           {/*value={this.state.dropoffdate} onChange={this.Changehandler}*/}
                                           {/*min={this.state.pickupdate}*/}
                                    {/*/>*/}

                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-2">*/}
                                {/*<div className="input-group mb-3" >*/}

                                    {/*<input type="time" name="dropofftime" aria-label="First name"*/}
                                           {/*className="form-control"*/}
                                           {/*value={this.state.dropofftime} onChange={this.Changehandler}*/}
                                    {/*/>*/}

                                {/*</div>*/}
                            {/*</div>*/}




                            {/*<div className="col-lg-6">*/}
                                {/*<div className="input-group mb-3">*/}
                                    {/*<div className="input-group-prepend">*/}
                                        {/*<span className="input-group-text" id="basic-addon1">No. Of Travellers</span>*/}
                                    {/*</div>*/}
                                    {/*<input type="number" min="0" className="form-control" name="notravellers"*/}
                                           {/*aria-describedby="basic-addon1"*/}
                                           {/*value={this.state.notravellers} onChange={this.Changehandler}*/}
                                    {/*/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-5"></div>*/}
                            {/*<div className="col-lg-1"></div>*/}


                            {/*<div className="col-lg-4">*/}
                                {/*<br/>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-7"></div>*/}
                            {/*<div className="col-lg-1"></div>*/}

                            {/*<div className="col-lg-2"></div>*/}
                            {/*<div className="col-lg-4"></div>*/}

                            {/*<div className="col-lg-4" align="end">*/}
                                {/*<button className="btn btn-primary" type="submit">Find a ride</button>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-2" align="end">*/}

                            {/*</div>*/}

                        {/*</div>*/}


                        {/*<div className="tm-container-outer tm-position-relative" id="tm-section-4">*/}


                        {/*</div>*/}

                    {/*</div>*/}


                {/*</form>*/}


                <div className="container-fluid">
                    <div className="row">

                        <div className="col-sm-6 tinput">

                        </div>


                        <div className="col-sm-6 tm-bg-gray">
                            <form onSubmit={this.handleSubmit} className="tm-contact-form">
                                <div className="form-group">
                                    <input type="text" id="contact_subject"
                                           className="form-control" placeholder="Pickup Location"    value={this.state.pickuplocation} onChange={this.Changehandler}
                                           name="pickuplocation"/>
                                </div>
                                <div className="form-group tm-name-container">
                                    <input type="date" id="contact_name" name="pickupdate" className="form-control"
                                           placeholder="Pickup Date"  value={this.state.pickupdate} onChange={this.Changehandler} />
                                </div>

                                <div className="form-group tm-email-container">
                                    <input type="time" id="contact_email" name="pickuptime" className="form-control"
                                           placeholder="time"     value={this.state.pickuptime} onChange={this.Changehandler}/>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input form-group" type="checkbox" id="inlineCheckbox1"
                                           value="true" name=" checkboxval"   onClick = {this.handlehiddenClik.bind(this)} />
                                    <div className="input-group-prepend">
                                        <label className="form-group "><p >Return  to the same location</p> </label>
                                    </div>
                                </div>

                                <div className="form-group" hidden = {(!this.state.hidden)? "hidden" : ""}>
                                    <input type="text"
                                           className="form-control" placeholder="Drop Off Location"
                                           value={this.state.dropofflocation} onChange={this.Changehandler}
                                           name="dropofflocation"
                                    />
                                </div>

                                <div className="form-group tm-name-container">
                                    <input  id="contact_name" name="contact_name" className="form-control"
                                            placeholder="Drop off Date" disabled/>
                                </div>

                                <div className="form-group tm-email-container">
                                    <input type="date" id="contact_email" name="dropoffdate" className="form-control"
                                           placeholder="date"  value={this.state.dropoffdate} onChange={this.Changehandler}
                                           min={this.state.pickupdate}/>
                                </div>

                                <div className="form-group tm-name-container">
                                    <input  id="contact_name" name="contact_name" className="form-control"
                                            placeholder="Drop Off Time" disabled/>
                                </div>

                                <div className="form-group tm-email-container">
                                    <input type="time" id="contact_email" name="dropofftime" className="form-control"
                                           placeholder="date"   value={this.state.dropofftime} onChange={this.Changehandler}/>
                                </div>

                                <div className="form-group">
                                    <input type="Number" id="contact_subject" name="notravellers"
                                           className="form-control" placeholder="No Of Travellers"  value={this.state.notravellers} onChange={this.Changehandler} min="0"/>
                                </div>

                                <button type="submit"
                                        className="btn btn-primary tm-btn-primary tm-btn-send text-uppercase">
                                    Find a ride
                                </button>
                            </form>
                        </div>
                    </div>
                </div>





                {/*<br/>*/}
                {/*<div className="container-fluid becolor">*/}
                    {/*<div className="container">*/}
                        {/*<div className="row">*/}
                            {/*<div className="col-lg-4">*/}
                                {/*<hr/>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-4">*/}
                                {/*<h3 style={{textAlign: "center"}}>Benefits from us</h3>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-4">*/}
                                {/*<hr/>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                        {/*<br/>*/}
                        {/*<div className="row">*/}
                            {/*<div className="col-lg-6">*/}
                                {/*<h4 style={{textAlign: "center"}} className="btitles">*/}
                                    {/*Incredibly low prices*/}
                                {/*</h4>*/}

                                {/*<p style={{textAlign: "center"}}>*/}
                                    {/*huge discounts and special rates*/}
                                {/*</p>*/}
                                {/*<br/>*/}

                                {/*<h4 style={{textAlign: "center"}} className="btitles">*/}
                                    {/*Free cancellation & modification*/}
                                {/*</h4>*/}
                                {/*<p style={{textAlign: "center"}}>*/}
                                    {/*Free of charge week befor cancelation*/}
                                {/*</p>*/}
                                {/*<br/>*/}
                                {/*<h4 style={{textAlign: "center"}} className="btitles">*/}
                                    {/*24 hour support*/}
                                {/*</h4>*/}
                                {/*<p style={{textAlign: "center"}}>*/}
                                    {/*Round the clock multi language customer service, 7 days a week*/}
                                {/*</p>*/}
                            {/*</div>*/}

                            {/*<div className="col-lg-6">*/}
                                {/*<h4 style={{textAlign: "center"}} className="btitles">*/}
                                    {/*No hidden fees and commisions*/}
                                {/*</h4>*/}
                                {/*<p style={{textAlign: "center"}}>*/}
                                    {/*All details are indicted in the terms.There are no fees for credit card processing.*/}
                                {/*</p>*/}
                                {/*<br/>*/}
                                {/*<h4 style={{textAlign: "center"}} className="btitles">*/}
                                    {/*Reliable*/}
                                {/*</h4>*/}
                                {/*<p style={{textAlign: "center"}}>*/}
                                    {/*We collaborate only with reputable car rental companies and always gurantee*/}
                                    {/*highlevel of services.*/}
                                {/*</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <br/>
            </div>
        )
    }
};

export default withRouter(TransportInput);