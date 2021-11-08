import React, { Component } from "react";
import { StyledDropZone } from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'

class FormAndPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoBoyName: "",
      cryptoBoyPrice: "",
      label: "",
      file: undefined,
      data: undefined,
      ipfs: undefined,
    };
  }
  setFile = (file, data) => {
    this.state.label = file.name;
    this.setState({ file, data });
    console.log('file:' + JSON.stringify(this.state));
  }
  componentDidMount = async () => {
    await this.props.setMintBtnTimer();
  };

  callMintMyNFTFromApp = (e) => {
    e.preventDefault();
    this.props.mintMyNFT(
      this.state.cryptoBoyName,
      this.state.cryptoBoyPrice
    );
  };

  render() {
    const label = this.state.label ?
      this.state.label :
      'Click or drop your file here';
    return (
      <div>
        <p>{this.state.ipfs}</p>
        <div style={{ margin: "2%" }}>
          <div className="card mt-1">
            <div className="card-body align-items-center d-flex justify-content-center">
              <h5>AI artist at your service. Drop your imagination here!</h5>
            </div>
          </div>
          <div style={{ "marginTop": "10%" }}>
            <StyledDropZone
              onDrop={this.setFile}
              label={label}
            />
          </div>
          <div className="card mt-1">
            <form onSubmit={this.callMintMyNFTFromApp} className="pt-4 mt-1">
              <div className="row">
                <div className="col-md-3">
                </div>
              </div>
              <div style={{ "marginLeft": "30%" }} className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="cryptoBoyName">NFT Name</label>
                    <input
                      required
                      type="text"
                      value={this.state.cryptoBoyName}
                      className="form-control"
                      placeholder="Enter Your BlockAI NFTs Name"
                      onChange={(e) =>
                        this.setState({ cryptoBoyName: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="price">Price</label>
                    <input
                      required
                      type="number"
                      name="price"
                      id="cryptoBoyPrice"
                      value={this.state.cryptoBoyPrice}
                      className="form-control"
                      placeholder="Enter Price In Ξ Dojo"
                      onChange={(e) =>
                        this.setState({ cryptoBoyPrice: e.target.value })
                      }
                    />
                  </div>
                  <button
                    id="mintBtn"
                    style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
                    type="submit"
                    className="btn mt-4 btn-block btn-outline-primary"
                  >
                    Mint BlockAI NFT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div >
    );
  }
}

export default FormAndPreview;
