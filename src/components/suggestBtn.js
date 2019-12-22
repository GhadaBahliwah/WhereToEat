import React, {Component} from 'react'
import '../css/btn.css';
import RestuarantData from './restuarantData'
import {Logo} from './logo'
import {Login} from './login'
import {FooterDownload} from './footer'
import '../css/style.css'

class SuggestBtn extends Component {
    constructor (props) {
      super(props);
      this.state = {
      lat: null,
      long: null,
      flag: false,
      coords: null,
      loading: false
      }
      this.getLocation = this.getLocation.bind(this);
      this.getCoordinates = this.getCoordinates.bind(this);
    }

  // Get User Location
   getLocation = () => {
    this.setState({loading:true});
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
    }
    getCoordinates = (position) => {
    this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
        coords: `${position.coords.latitude},${position.coords.longitude}`,
        flag: true,
        loading: false
    })
    console.log(this.state.coords);
    }

    handleLocationError (error){
        switch(error.code) {
            case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
            case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
            case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
            case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
            default:
                alert("An unknown error occured");
        }
    }

    render(){
        var {flag} = this.state;
        if(!flag){
            return(
                    <div className="main-container">
                        <Logo/>
                        <div className="btn-section">
                            <a className="btn" onClick={this.getLocation}>
                            {!this.state.loading ?
                                <span id="buttonLabel">اقترح </span>
                                :<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                            }
                            </a>
                        </div>
                        <Login/>
                        <FooterDownload/>
                    </div>
            )
        }
        else{
            return(
                <div className="main-container">
                <RestuarantData lat={this.state.lat} long={this.state.long} coords={this.state.coords}/>
                </div>
            )
        }
    }
}
export default SuggestBtn;
