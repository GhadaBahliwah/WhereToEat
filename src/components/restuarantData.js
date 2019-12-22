import React, {Component} from 'react'
import {Header} from './header'
import {FooterDownload} from './footer'
import '../css/style.css'
import '../css/btn.css'
import '../css/restuarant.css'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import MarkerImg from '../img/maps_marker.png'

class RestuarantData extends Component {

    constructor (props) {
        super(props);
        this.state = {
            resturantDetails: {},
            coords: null,
            loading: false
        }
        this.componentDidMount = this.componentDidMount.bind(this);
      }

      componentDidMount() {
        this.setState({loading: true});
          fetch(`/api/v1/GenerateFS.php?uid=${this.props.coords}&get_param=value`)
          .then( response => response.json())
          .then (data => this.setState({resturantDetails: data}))
          this.setState({loading:false});
      }

    render(){
        let {resturantDetails} = this.state;
        if(resturantDetails !== {} && resturantDetails.name !== "A" && resturantDetails.name !== "") {
            return(
                <div className="maincontainer">
                <Header/>
                <div className="rest-details">
                    <div className="restaurant-name">
                        <p>
                        <a href={resturantDetails.link} target="blank_">{resturantDetails.name}</a>
                        </p>
                        <span className="restaurant-category">{resturantDetails.cat}</span>
                    </div>

                    {resturantDetails.lat != null && resturantDetails.lon != null ?
                    <div className="map-section" style={{width: '50%',height:'60%', position: 'absolute', top: '65px'}}>
                        <Map
                        google={this.props.google}
                        zoom={16}
                        style={{width: '100%',height:'100%', position: 'absolute', top: '0'}}
                        className="map"
                        initialCenter={{
                            lat: this.state.resturantDetails.lat,
                            lng: this.state.resturantDetails.lon
                        }}>
                            <Marker onClick={this.onMarkerClick}
                                    name={'Current location'}
                                    icon={{
                                        url: MarkerImg
                                    }}
                                    lat={resturantDetails.lat}
                                    lon={resturantDetails.lon}
                            />
                        </Map>

                        <div className="rest-link">
                            <a id="google-maps-button" href={`http://maps.google.com/?q=${resturantDetails.lat},${resturantDetails.lon}`} target="blank_">
                                <span>Google Maps فتح في</span>
                            </a>
                        </div>
                    </div>
                    : null
                    }

                </div>
                <div className="space"></div>
                <div className="btn-section">
                        <a className="btn" onClick={this.componentDidMount}>
                        {!this.state.loading ?
                            <span id="buttonLabel">اقتراح آخر</span>
                            :<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                        }
                        </a>
                </div>
                <FooterDownload/>
                </div>
            )
        }
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAzfEKSwIzN7eAR6Bf5N2KhgqfJzmU0ICI")
  })(RestuarantData)