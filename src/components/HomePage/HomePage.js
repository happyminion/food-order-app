import React, { Component } from 'react';
import './../../App.scss';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="home-hero-img-wrapper">
          <section>
            <h1>What's for dinner today?</h1>
            <form>
              <label>
                Name:
                <input className="home-order-input" type="text" name="name" value="Enter your street address here" />
              </label>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default HomePage;